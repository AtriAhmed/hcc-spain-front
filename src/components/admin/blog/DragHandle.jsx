import React from "react"
import { DragHandleOutlined } from "@mui/icons-material";
import { SortableHandle } from "react-sortable-hoc";

const DragHandle = SortableHandle(() =>
    <span className='flex justify-center items-center select-none'>
        <DragHandleOutlined fontSize="medium" />
    </span>);
export default DragHandle;