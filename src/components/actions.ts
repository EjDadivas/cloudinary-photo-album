"use server"
import { SearchResult } from '@/app/gallery/page';
import  cloudinary  from 'cloudinary';

export async function addImageToAlbum(image: SearchResult, album: string) {
    
    // just in case it is inside another folder
    let parts = image.public_id.split("/");
    if(parts.length>1) {
        parts = parts.slice(1)
    }
    const publicId = parts.join("/")
    await cloudinary.v2.api.create_folder(album);
    cloudinary.v2.uploader.rename(image.public_id, `${album}/${publicId}`)
}