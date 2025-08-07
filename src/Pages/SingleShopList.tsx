import React, { useState } from "react";
import CardHeader from "../Components/CardHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faRefresh, faSave } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import useSingleShopList from "../Hooks/useSingleShopList";
import ShopListBox from "../Components/ShopListBox";
import ListBox from "../Components/ListBox";
import ListBoxItem from "../Components/ListBoxItem";
import { SubmitHandler } from "react-hook-form";
import AxiosService from "../Services/AxiosService";
import { ShopListFormUpdateInput } from "../Models/ShopListFormUpdateInput";
import PieChartTemplate from "../Components/PieChart";
import MainButton from "../Components/MainButton";
import { FormatTimeStamp } from "../Services/FormatTimeStamp";

interface NotificationProps {
    isVisible: boolean
    message: string
    isError: boolean
}

const SingleShopList: React.FC = () => {
    const [notification, setNotification] = useState<NotificationProps | null>(null)
    const [activeProductId, setActiveProductId] = useState<number | null>(null)

    const { foodListId } = useParams<{ foodListId: string }>()
    const iD = foodListId ? parseInt(foodListId, 10) : NaN

    const {
        shopListSingle,
        loading: loadingShopList,
        error: errorShopList,
        refetch
    } = useSingleShopList({ foodListId: iD })

    const onSubmit: SubmitHandler<ShopListFormUpdateInput> = async (data) => {
        try {
            await AxiosService.post(
                `/Product/Update/${data.productId}`,
                {
                    productDescription: data.productDescription,
                    productPrice: data.productPrice
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${sessionStorage.getItem("authToken")}`
                    }
                }
            );
            setNotification({
                isVisible: true,
                isError: false,
                message: "Zapisano"
            });
            onSaveOrUpdateReceipt(shopListSingle!.shopListId);
        } catch (e: any) {
            setNotification({
                isVisible: true,
                isError: true,
                message: e.response?.data || "Błąd"
            });
        }
    };

    const onSaveOrUpdateReceipt = async (foodListId: number) => {
        try {
            await AxiosService.post(
                `/Receipt/Save/${foodListId}`,
                {},
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${sessionStorage.getItem("authToken")}`
                    }
                }
            );
            setNotification({
                isVisible: true,
                isError: false,
                message: "Rachunek zapisany"
            });
            refetch();
        } catch (e: any) {
            setNotification({
                isVisible: true,
                isError: true,
                message: e.response?.data || "Błąd podczas zapisu rachunku"
            });
        }
    };

    return (
        <div className="flex-grow space-y-4">
            {notification?.isVisible && (
                <div
                    className={`rounded-md px-4 py-2 text-sm font-medium ${
                        notification.isError ? "bg-red-200 text-red-800" : "bg-green-200 text-green-800"
                    }`}
                >
                    {notification.message}
                </div>
            )}
            <CardHeader title={`Lista zakupów`} subtitle={`Jadłospis: ${shopListSingle?.foodList.foodListName}`}>
                <FontAwesomeIcon icon={faList} className="me-auto h-8 text-brand-warm" />
            </CardHeader>

            {shopListSingle && (
                <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2">
                        <ShopListBox shopListSingle={shopListSingle} onSubmit={onSubmit} activeProductId={activeProductId}/>
                    </div>

                    <div className="col-span-1">
                        <ListBox>
                            <ListBoxItem label="Rachunek" />

                            {shopListSingle.receipt && (
                                <>
                                    <ListBoxItem label="Suma: ">
                                        <span>{shopListSingle.receipt.receiptPrice} PLN</span>
                                    </ListBoxItem>
                                    {shopListSingle.receipt.receiptCreatedAt && (
                                        <ListBoxItem label="Zrealizowana dnia: ">
                                            <span>{FormatTimeStamp(shopListSingle.receipt.receiptCreatedAt)}</span>
                                        </ListBoxItem>
                                    )}
                                </>
                            )}

                            <ListBoxItem label="Podsumowanie: ">
                                <div className="bg-primary mt-2 rounded-md">
                                    {shopListSingle.receipt && (
                                        <PieChartTemplate products={shopListSingle.products} onSectorClick={(id) => setActiveProductId(id)}/>
                                    )}
                                    <div className="flex flex-row space-x-2 p-3">
                                        <MainButton
                                            label={
                                                shopListSingle.receipt ? "Odśwież rachunek" : "Zapisz rachunek"
                                            }
                                            onClick={() => onSaveOrUpdateReceipt(shopListSingle.shopListId)}
                                        >
                                            <FontAwesomeIcon
                                                icon={shopListSingle.receipt ? faRefresh : faSave}
                                            />
                                        </MainButton>
                                    </div>
                                </div>
                            </ListBoxItem>
                        </ListBox>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SingleShopList;
