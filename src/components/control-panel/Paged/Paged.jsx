import ReactPaginate from "react-paginate";
import css from "./style.module.css";

export default function Paged({ pageCount, page, onClick }) {
	const handleChangePage = ({ selected }) => {
		onClick(selected);
		window.scroll({ top: 0 });
	};

	if (!pageCount) return null;
	return (
		<ReactPaginate
			containerClassName={css.paged}
			previousClassName={css.back}
			nextClassName={css.next}
			pageClassName={css.li}
			breakClassName={css.points}
			activeClassName={css.active}
			disabledClassName={css.disabledNextAndBack}
			previousLabel={"<"}
			nextLabel={">"}
			breakLabel="..."
			pageCount={pageCount}
			marginPagesDisplayed={1}
			pageRangeDisplayed={1}
			onPageChange={handleChangePage}
			forcePage={page}
		/>
	);
}
