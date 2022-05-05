import { Button, MenuItem, MenuList, Select, SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import makeStyles from "@mui/styles/makeStyles";
//import SingleCard from "../../singleItems/SingleCard/SingleCard";
import { SubmitHandler, useForm } from "react-hook-form";
import { Category, CategoryValue } from "../../../model/Category";

const UseStyles = makeStyles({
    select: {
        // [theme.breakpoints.up("md")]: {
        //     display: 'none'
        // }
    },
    card: {
        // [theme.breakpoints.down("md")]: {
        //     display: 'none'
        // }
    }
})
interface CategoryFilterProps{
    layout: Layout, 
    onSubmit: SubmitHandler<CategoryFilterModel>
}

export interface CategoryFilterModel {
    category: Category | String;
}

export enum Layout {
    top = "top",
    side = "side"
}

//check how to make the whole code shorter, and how to maybe avoid passing the layout prop 


export function CategoryFilter(props:CategoryFilterProps) {
    const classes = UseStyles();
    const [selectedCategory, setSelectedCategory] = useState<Category | string>("")
    const { setValue, handleSubmit, reset } = useForm<CategoryFilterModel>({
        defaultValues: {
            category: ""
        }
    })

    const handleCategorySelectChange = (event: SelectChangeEvent) => {
        setSelectedCategory(event.target.value)
    }

    const handleCategoryMenuChange = (newCategory: Category) => {
        newCategory === selectedCategory ?
            setSelectedCategory("") :
            setSelectedCategory(newCategory);


        console.log(selectedCategory)
    }

    const SubmitResetButtons = ()=>{
        return <>
         <Button type="submit"
                        onClick={() => {
                            reset()
                            setSelectedCategory("")
                        }}>
                        reset
                    </Button>
                    <Button type="submit">
                        submit
                    </Button>

        </>
    }

    switch (props.layout) {
        case Layout.top:
            return <form onSubmit={handleSubmit(props.onSubmit)}>
                <Select
                    className={classes.select}
                    label="category"
                    value={selectedCategory}
                    //defaultValue = ""
                    onChange={handleCategorySelectChange}
                    fullWidth

                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {CategoryValue.map(category =>
                        <MenuItem key={category} value={category} > {category} </MenuItem>
                    )}
                </Select>
                {setValue("category", selectedCategory)}
                {SubmitResetButtons()}
            </form>
        case Layout.side:
            return <form onSubmit={handleSubmit(props.onSubmit)} >
                {/* <SingleCard title="By Category" content={ */}
                <div>
                    <MenuList className={classes.card} variant="selectedMenu">
                        {CategoryValue.map(category =>
                            <MenuItem key={category} onClick={() => { handleCategoryMenuChange(category) }} selected={category === selectedCategory} >
                                {category}
                            </MenuItem>
                        )}
                    </MenuList>
                    {setValue("category", selectedCategory)}
                   {SubmitResetButtons()}
                </div>
                {/* } /> */}
            </form>
    }


}