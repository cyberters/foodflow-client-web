import React, { useState } from "react";
import CardHeader from "../Components/CardHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faList, faListDots } from "@fortawesome/free-solid-svg-icons";
import useSingleFoodList from "../Hooks/useSingleFoodList";
import { Link, useParams } from "react-router-dom";
import ListBoxItem from "../Components/ListBoxItem";
import ListBox from "../Components/ListBox";
import DishTemplate from "../Components/DishTemplate";
import { ProductProps } from "../Models/ProductProps";
import AxiosService from "../Services/AxiosService";
import useSingleShopList from "../Hooks/useSingleShopList";
import ShopListBox from "../Components/ShopListBox";
import DayPagination from "../Components/DayPagination";

const SingleFoodList : React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const foodListId = id ? parseInt(id, 10) : NaN;
    const { singleFoodList, loading: loadingFoodList, error: errorFoodList } = useSingleFoodList(foodListId);

    const [products, setProducts] = useState<ProductProps[]>()
    const { shopListSingle, loading: loadingShopList, error: errorShopList, refetch } = useSingleShopList({foodListId})

    const showProductList = async (foodListId: number) => {
        await AxiosService.get(`/ShopList/GetAll/${foodListId}`)
        .then((res) => (
            setProducts(res.data)
        ))
        .catch((e) => console.log(e))
        .finally(() => console.log('success'))
    }

    const saveProductList = async (foodListId: number) => {
        try {
            const res = await AxiosService.post(
                `/ShopList/Store/${foodListId}`, {},
                { withCredentials: true }
            );
            console.log('Lista zakupów została zapisana!');
            refetch()
        } catch (e) {
            console.log('Błąd zapisu:', e);
        } finally {
            console.log('success');
        }
    };


    return (
        <div className="flex-grow space-y-4">
            <CardHeader title={`Jadłospis`} subtitle="Twój jadłospis">
                <FontAwesomeIcon
                    icon={faList}
                    className="me-auto h-8 text-brand-warm"
                />
            </CardHeader>
            {!shopListSingle ? <ListBox>
                <ListBoxItem label={`Lista zakupów`}/>
                <div className="px-3 py-2 border border-black rounded-md" onClick={() => showProductList(foodListId)}>pokaż listę zakupów</div>
                {(products && products.length > 0) && <div className="grid grid-cols-3 gap-3 px-3 py-2 bg-white rounded-md">
                    {products.map((item) => (
                        <span>{item.productName}</span>
                    ))}
                    <div className="px-3 py-2 border border-black rounded-md" onClick={() => saveProductList(foodListId)}>zapisz listę zakupów</div>
                </div>}
            </ListBox> : <ListBox>
                    <ListBoxItem label="Listy zakupów"></ListBoxItem>
                    <Link to={`/dashboard/shopList/${foodListId}`} className="hover:bg-primary rounded-md transition-all hover:px-3 flex flex-row">
                        <ListBoxItem label="Sprawdź, co kupić!">
                            <span>Lista produktów: {shopListSingle.products.length}</span>
                            <div className="py-1"></div>
                            <div className="border border-primary bg-lime-200 rounded-md flex flex-row space-x-2 px-2 py-1 items-center">
                                <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                                <span>Gotowa na zakupy!</span>
                            </div>
                        </ListBoxItem>
                        <FontAwesomeIcon icon={faListDots} className="ms-auto my-auto"/>
                    </Link>
                </ListBox>}
            {singleFoodList && <DayPagination days={singleFoodList.days}/>}
        </div>
    )
}

export default SingleFoodList