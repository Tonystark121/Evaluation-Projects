var selectedRow = null;

function onFormSubmit(){

    var formData = readFormData();
    if(selectedRow==null){
      insertNewRecord(formData);
    }else{
        updateRecord(formData);
    }
    resetForm();

}

function readFormData(){
    var formData = {};
    formData['prodCode'] = document.querySelector('#prodCode').value; 
    formData['prodname'] = document.querySelector('#prodname').value;
    formData['qty'] = document.querySelector('#qty').value;
    formData['price'] = document.querySelector('#price').value;
    return formData;
}

function insertNewRecord(data){
    var table = document.querySelector('#values').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 =  newRow.insertCell(0);
      cell1.innerHTML = data.prodCode;
    cell2 =  newRow.insertCell(1);
      cell2.innerHTML = data.prodname;
    cell3 =  newRow.insertCell(2);
      cell3.innerHTML = data.qty;
    cell4 =  newRow.insertCell(3);
      cell4.innerHTML = data.price;
    cell4 =  newRow.insertCell(4);
      cell4.innerHTML = `<a onClick='onEdit(this)'>Edit</a> <a onClick='onDelete(this)'>Delete</a>`;
}

function resetForm(){
  document.querySelector('#prodCode').value = '';
  document.querySelector('#prodname').value = '';
  document.querySelector('#qty').value = '';
  document.querySelector('#price').value = '';
  selectedRow = null;
}

function onEdit (td){
     selectedRow = td.parentElement.parentElement;
     document.querySelector('#prodCode').value = selectedRow.cells[0].innerHTML;
     document.querySelector('#prodname').value = selectedRow.cells[1].innerHTML;
     document.querySelector('#qty').value = selectedRow.cells[2].innerHTML;
     document.querySelector('#price').value = selectedRow.cells[3].innerHTML;
}

function updateRecord (formData){
    selectedRow.cells[0].innerHTML = formData.prodCode;
    selectedRow.cells[1].innerHTML = formData.prodname;
    selectedRow.cells[2].innerHTML = formData.qty;
    selectedRow.cells[3].innerHTML = formData.price;
}

function onDelete (td){
  if(confirm('Are U sure to delete this record')){
  row = td.parentElement.parentElement;
  document.querySelector('#values').deleteRow(row.rowIndex) ;
  resetForm();
  }
}