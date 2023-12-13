import React from 'react'

export function formatDate(inputDate) {
    const date = new Date(inputDate);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}

// Example usage:
// const inputDate = "Thu Nov 09 2023 00:00:00 GMT-0700 (Mountain Standard Time)";
// const formattedDate = formatDate(inputDate); //
