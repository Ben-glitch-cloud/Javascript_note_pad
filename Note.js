let AddNote = document.getElementById('Add_note'); 

let error = document.getElementById('error')    

let info = document.getElementById('info') 

let close_info = document.getElementById('Close')

let note_id = 0; 

let writtenNote = ""; 

let edit_note = 0;  

info.addEventListener('click', function(){
    document.getElementById('popup').style.display = 'block' 
})

close_info.addEventListener('click', function(){ 
    document.getElementById('popup').style.display = 'none'
})


AddNote.addEventListener('click', function(){ 

    writtenNote = document.getElementById('note').value;  

    if(writtenNote.length > 1)
    {   
        NoteList()
        error.textContent = "Note add"; 
    } 
    else 
    {
        error.textContent = "Nothing in this note"; 
    }
})   

function deleteId(Note)
{          
    let id = document.getElementById('div' + Note.id);  
    id.remove()  
    error.textContent = "Note has been Delete"; 
} 

function NewDate()
{
    return new Date().toString().split(" ").slice(0, 4).join("-")
} 

// Edit Note 

function Edit(Note)
{   
    edit_note = Note.id
    document.getElementById('edit').style.display = 'flex'  
    document.getElementById('newNote').value = ""; 
    document.getElementById('newNote').placeholder = document.getElementById(Note.id).innerText
} 

document.getElementById('editButton').addEventListener('click', function(){

    let newtext = document.getElementById('newNote').value; 
    
    if (newtext.length > 1)
    {
        document.getElementById(edit_note).innerHTML = newtext;  

        document.getElementById('edit').style.display = 'none' 

        error.textContent = "Note has been edited"; 
    } 
}) 

document.getElementById('closeEditButton').addEventListener('click', function()
{
    document.getElementById('edit').style.display = 'none' 
})

function NoteList()
{   

    // creating the child elemets 
   let notelist = document.createElement("p");     
   let Date = document.createElement("p"); 
   let note_item = document.createElement("div");   
    let note_item_la = document.createElement("div") 
    let note_item_ops = document.createElement("div")
        let buttonDelete = document.createElement("button") 
        let buttonEdit = document.createElement("button")

    // Setting Attribute to the newly create Elements

   notelist.setAttribute("id", note_id);    
   notelist.setAttribute("class", "note");
   buttonDelete.setAttribute("id", note_id);  
   buttonDelete.setAttribute("class", "DeleteButton");
   buttonDelete.setAttribute("onclick", "deleteId(this)");  

   buttonEdit.setAttribute("id", note_id);  
   buttonEdit.setAttribute("class", "Edit_button")
   buttonEdit.setAttribute("onclick", "Edit(this)"); 

   note_item.setAttribute("id", 'div' + note_id);  
   note_item.setAttribute("class", "note_item");   

   note_item_la.setAttribute("id", "note_item_layout") 

   note_item_ops.setAttribute("id", "note_item_ops")

   Date.setAttribute("class", "Date");



   note_id++; 

   let textnode = document.createTextNode(writtenNote); 
   let textnodeD = document.createTextNode(NewDate())

   buttonDelete.textContent = "Delete"; 
   buttonEdit.textContent = "Edit"; 

   notelist.appendChild(textnode);  

   Date.appendChild(textnodeD);  

   document.getElementById("notes").appendChild(note_item);   

   note_item.appendChild(note_item_la) 

   note_item.appendChild(note_item_ops)

   note_item_la.appendChild(notelist);  
   note_item_la.appendChild(Date);  
   note_item_ops.appendChild(buttonDelete);  
   note_item_ops.appendChild(buttonEdit); 

   
}

//`div{note_id}`