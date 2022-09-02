import ReactPaginate from "react-paginate";
import css from "./style.module.css";

export default function Paged({ pageCount, page, updatePage, className }) {
	const handleChangePage = ({ selected }) => {
		updatePage(selected);
		window.scroll({ top: 0 });
	};

	if (!pageCount) return null;

	return (
		<div className={className}>
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
		</div>
	);
}
