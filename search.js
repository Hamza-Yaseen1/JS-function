function search(){
    let a = prompt("Enter to search");
    const txt = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque vitae enim at sunt porro, iusto labore, dicta perspiciatis in rem ad iste, vel quia ab consequuntur aspernatur. Quae, voluptatum culpa."
if(txt.toLowerCase().includes(a)){
    alert("Text Found");
}
else{ 
    alert("Not found")
}
}
