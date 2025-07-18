import ImageKit from "imagekit-javascript";

const imagekit = new ImageKit({
  publicKey: "public_ROTj5IjWgh9N7Uq4SSQGFwtYbPY=",  
  urlEndpoint: "https://ik.imagekit.io/0i3225dq9", 
  transformationPosition: "path",
  authenticationEndpoint: "http://localhost:5000/auth", 
});
export default imagekit;
