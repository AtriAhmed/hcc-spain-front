import { InboxIcon, Search } from '@mui/icons-material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Posts from './Posts';
import Input from '../Input';
import Button from '../Button';

export default function BlogPageCmp() {
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [limit, setLimit] = useState(10); // Set the limit of posts per page

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1); // Reset to first page on search
    };

    const handlePageChange = (newPage) => {
        if (newPage > 0 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    return (
        <div className='px-8 mx-auto pt-[90px]'>
            <div className='flex items-center'>
                <div className='relative'>
                    <Input
                        name="search"
                        placeholder="Search Blog Posts"
                        customClassName="shadow-xl border-2 border-gray-300"
                        onChange={handleSearchChange}
                        value={searchQuery}
                    />
                    <div className='absolute top-0 right-[4px] h-full'>
                        <div className='flex items-center h-full mt-[-2px]'>
                            <Search fontSize='medium' className='text-gray-400' />
                        </div>
                    </div>
                </div>
            </div>
            <Posts
                searchQuery={searchQuery}
                currentPage={currentPage}
                setTotalPages={setTotalPages}
                limit={limit}
                gridCols="grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3"
            />
            {/* Pagination Controls */}
            <div className="flex justify-center items-center mt-4">
                <Button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous
                </Button>
                <span className="mx-2">{currentPage} of {totalPages}</span>
                <Button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next
                </Button>
            </div>
        </div>
    );
}

