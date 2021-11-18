import { Request, Response } from "express";
//import * as formidable from 'formidable';
//import { IncomingForm } from 'formidable';
import { IncomingForm } from "formidable";
import * as fs from 'fs';

async function checkCreateUploadsFolder (uploadsFolder) {
    try {
		if(!fs.existsSync(uploadsFolder)){
            console.log('The uploads folder doesn\'t exist, creating a new one...')
            try {
			    fs.mkdir(uploadsFolder, (err) => {
                    if (err)
                        console.log(err.message)
                })
            } 
            catch (err) {
				console.log('Error creating the uploads folder 1')
				return false
			}
        }
    } 
    catch (e) {
        console.log(e.message)
        return false
	}
	return true
}

export default async function uploadAvatar(req: Request, res: Response){

    //console.log("req",req.body);
    let form = new IncomingForm()
    //console.log("form",form);
    const uploadsFolder = process.env.UPLOAD_FOLDER
    //console.log("uploadFolder",uploadsFolder);
	//form.multiples = true
	//form.uploadDir = uploadsFolder
	//form.maxFileSize = 50 * 1024 * 1024 // 50 MB
	const folderCreationResult = await checkCreateUploadsFolder(uploadsFolder)
	if (!folderCreationResult) {
		console.log("Folder creation failed")
	}

    form.parse(req, (err, fields, files) => {
        console.log(req.body)
    })
}