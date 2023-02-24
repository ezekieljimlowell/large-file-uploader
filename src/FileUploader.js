import React from "react";
import axios from "axios";

export const FileUploader = () => {
    const url = `https://v2.convertapi.com/upload`;
    const uploadFile = (e) => {
        const file = e.target.files[0];
        const formData = new FormData()
        formData.append('file', file)
        const filePath = URL.createObjectURL(file)
        console.log(file, filePath)
        axios.post(`https://v2.convertapi.com/upload`, {
            formData
        }).then(data => console.log(data))
    }
    return (
        <>
            <label htmlFor="fileUploader">Large file uploader</label>
            <input type="file" id="fileUploader" onChange={uploadFile}></input>
        </>
    )
}