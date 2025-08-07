import { faDollar, faEdit, faScaleBalanced, faUtensils } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { ProductProps } from "../Models/ProductProps";
import { ShopListFormUpdateInput } from "../Models/ShopListFormUpdateInput";
import ItemDetails from "./ItemDetails";

type OnSubmitProps = {
    product: ProductProps;
    onSubmit: SubmitHandler<ShopListFormUpdateInput>;
    highlighted?: boolean;
};

const ProductItem: React.FC<OnSubmitProps> = ({ product, onSubmit, highlighted = false }) => {
    const [editProductId, setEditProductId] = useState<number | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ShopListFormUpdateInput>()

    const handleLocalSubmit: SubmitHandler<ShopListFormUpdateInput> = (data) => {
        onSubmit({ ...data, productId: product.productId })
        reset();
        setEditProductId(null)
    }

    return (
        <form
            key={product.productId}
            className={`masonry-item flex rounded-md overflow-hidden px-3 
            py-3 bg-primary transition-all hover:border hover:border-grey-900 hover:-rotate-[.75deg] hover:scale-[1.05] cursor-pointer hover:z-40 hover:shadow-md
            ${highlighted && `-rotate-[.75deg] scale-[1.05] z-40 shadow-md`}`}
            style={{ breakInside: "avoid" }}
            onSubmit={handleSubmit(handleLocalSubmit)}
            onDoubleClick={() =>
                setEditProductId((prev) =>
                    prev === product.productId ? null : product.productId
                )
            }
        >
            <div className="flex flex-col space-y-1">
                <div className="flex flex-row space-x-2 items-center">
                    <span className="text-md">{product.productName}</span>
                    <ItemDetails label={`400 g`}>
                        <FontAwesomeIcon icon={faScaleBalanced}/>
                    </ItemDetails>
                    <ItemDetails label={`3 porcje`}>
                        <FontAwesomeIcon icon={faUtensils}/>
                    </ItemDetails>
                </div>

                <div
                    style={{
                        maxHeight: editProductId === product.productId ? "150px" : "0",
                        overflow: "hidden",
                        transition: "max-height 0.3s ease",
                    }}
                >
                    <input
                        type="number"
                        className="text-sm bg-transparent focus:border-0 mt-2 py-2"
                        placeholder={product.productPrice ? `${product.productPrice}` : "Wprowadź kwotę..."}
                        {...register("productPrice", { required: "Cena zakupu jest wymagana" })}
                    />
                    {errors.productPrice && (
                        <p className="text-red-600 text-xs">{errors.productPrice.message}</p>
                    )}
                    <textarea
                        rows={4}
                        className="text-sm bg-transparent focus:border-0 mt-2"
                        placeholder={product.productDescription ? `${product.productDescription}` : "Wprowadź opis (opcjonalny)"}
                        {...register("productDescription")}
                        style={{
                            opacity: editProductId === product.productId ? 1 : 0,
                            transition: "opacity 0.3s ease 0.2s",
                            pointerEvents: editProductId === product.productId ? "auto" : "none",
                            width: "100%",
                            resize: "none",
                        }}
                    />
                </div>
                {editProductId === product.productId && <button type="submit" className="text-sm bg-brand-warm/30 px-2 py-1 rounded-md flex flex-row space-x-1 me-auto">
                    <FontAwesomeIcon icon={faEdit} className="my-auto" />
                    <h6 className="my-auto">
                        Zapisz
                    </h6>
                </button>}
            </div>
            <div className="flex flex-row space-x-3 ms-auto items-center mb-auto">
                <div className="text-sm bg-brand-warm/30 px-2 py-1 rounded-md ms-auto flex flex-row space-x-1" onClick={() =>
                setEditProductId((prev) =>
                    prev === product.productId ? null : product.productId
                )
            }>
                    <FontAwesomeIcon icon={faEdit} className={`my-auto`} />
                    <h6 className="my-auto">
                        Edytuj
                    </h6>
                </div>
                <div className={`text-sm ${product.productPrice ? `bg-green-300` : `bg-green-200`} px-2 py-1 rounded-md ms-auto flex flex-row space-x-2`}>
                    <FontAwesomeIcon icon={product.productPrice ? faDollar : faDollar} className={`my-auto h-5`} />
                    <h6 className="my-auto text-lg">
                        {product.productPrice ? `${product.productPrice} PLN` : "Wprowadź kwotę..."}
                    </h6>
                </div>
            </div>
        </form>
    );
};

export default ProductItem;
