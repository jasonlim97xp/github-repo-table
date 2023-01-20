import { Dispatch, SetStateAction } from "react";
import {
  PaginationContainer,
  PaginationPageView,
  PaginationPageNavigator,
  Pages,
} from "./Pagination.style";

interface Props {
  totalRow: number;
  rowsPerPage: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

const Pagination = ({
  totalRow,
  rowsPerPage,
  currentPage,
  setCurrentPage,
}: Props) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalRow / rowsPerPage); i++) {
    pages.push(i);
  }

  function totalPage() {
    let amountOfPage = Math.ceil(totalRow / rowsPerPage);
    return amountOfPage === 0 ? 1 : amountOfPage;
  }

  return (
    <PaginationContainer>
      <PaginationPageView>
        Page {currentPage} of {totalPage()}
        {/* {Math.ceil(totalRow / rowsPerPage) === 0
          ? 1
          : Math.ceil(totalRow / rowsPerPage)} */}
      </PaginationPageView>
      <PaginationPageNavigator>
        {pages.map((page, index) => {
          return (
            <Pages key={index} onClick={() => setCurrentPage(page)}>
              {page}
            </Pages>
          );
        })}
      </PaginationPageNavigator>
    </PaginationContainer>
  );
};
export default Pagination;
