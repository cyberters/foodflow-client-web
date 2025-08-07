import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ShopListProps } from "../Models/ShopListProps";
import { FormatTimeStamp } from "../Services/FormatTimeStamp";
import ListBox from "./ListBox";
import ListBoxItem from "./ListBoxItem";
import { faArrowLeft, faArrowRight, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import ProductItem from "./ProductItem";
import { ShopListFormUpdateInput } from "../Models/ShopListFormUpdateInput";

export interface ShopListPropsSingle {
  shopListSingle: ShopListProps
  onSubmit: SubmitHandler<ShopListFormUpdateInput>
  activeProductId?: number | null
}

const ITEMS_PER_PAGE = 8;

const ShopListBox: React.FC<ShopListPropsSingle> = ({ shopListSingle, onSubmit, activeProductId }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalPages = Math.ceil(shopListSingle.products.length / ITEMS_PER_PAGE);

  const paginatedProducts = shopListSingle.products.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <ListBox>
      <ListBoxItem
        label={`Lista zakupów`}
      >
      </ListBoxItem>
      <ListBoxItem
        label={`Ilość produktów: `}
      >
        <span>{shopListSingle.products.length} sztuk</span>
      </ListBoxItem>
      <ListBoxItem label={`Utworzono dnia: `}>
        <span>{FormatTimeStamp(
          shopListSingle.createdBy
        )}</span>
      </ListBoxItem>
      <ListBoxItem label={"Produkt"}>
        <div
          className="flex flex-col space-y-2 pt-2 pb-1 min-h-[70vh]"
        >
          {paginatedProducts.length > 0 ? (
            paginatedProducts.map((item) => (
              <ProductItem key={item.productId} product={item} onSubmit={onSubmit} highlighted={item.productId === activeProductId}/>
            ))
          ) : (
            <div>Brak produktów</div>
          )}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center mt-4 space-x-4">
            <button
              className="px-3 py-1 bg-brand-warm/20 rounded disabled:opacity-50"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              <FontAwesomeIcon icon={faArrowLeft}/>
            </button>
            <span className="my-auto">Strona {currentPage} z {totalPages}</span>
            <button
              className="px-3 py-1 bg-brand-warm/20 rounded disabled:opacity-50"
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              <FontAwesomeIcon icon={faArrowRight}/>
            </button>
          </div>
        )}
      </ListBoxItem>
    </ListBox>
  );
};

export default ShopListBox;
