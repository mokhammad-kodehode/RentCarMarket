

import styles from "./form.module.css";
import { SearchInput } from "./searchInput/SearchInput";
import PickUp from "./pick-up/PickUp";
import DropOff from "./drop-off/DropOff";
import SearchCar from "../buttons/SearchCar";

export function Form() {
    return (
        <form className={styles.container}>
            <SearchInput/>
            <PickUp/>
            <DropOff/>
            <SearchCar/>
        </form>
    )
}