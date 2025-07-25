import styles from './Pagination.module.css';
import { v4 as uuidv4 } from "uuid";
import { usePagination, DOTS } from '../../utils/usePagination';

const Pagination = (props) => {
    const {
        onPageChange,
        totalCount,
        siblingCount = 1,
        currentPage,
        pageSize       
    } = props;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });

    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    let lastPage = paginationRange[paginationRange.length - 1];
    
    return (
        <ul
            className={styles.paginationContainer}
        >          
            <li
                className={`${styles.paginationItem} ${currentPage === 1 ? styles.disabled : ""}`}
                onClick={() => onPageChange(currentPage - 1)}
            >
                <div className={`${styles.arrow} ${styles.left}`}/>
            </li>
            {paginationRange.map((pageNumber) => {               
                if (pageNumber === DOTS) {
                return <li key={uuidv4()} className={`${styles.paginationItem} ${styles.dots}`}>&#8230;</li>;
                }
               
                return (
                <li 
                    key={uuidv4()}
                    className={`${styles.paginationItem} ${pageNumber === currentPage ? styles.selected : ""}`}
                    onClick={() => onPageChange(pageNumber)}
                >
                    {pageNumber}
                </li>
                );
            })}          
            <li
                className={`${styles.paginationItem} ${currentPage === lastPage ? styles.disabled : ""}`}
                onClick={() => onPageChange(currentPage + 1)}
            >
                <div className={`${styles.arrow} ${styles.right}`}/>
            </li>
        </ul>
    );
};

export default Pagination;

