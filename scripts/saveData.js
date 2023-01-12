function clearData(){
  if(window.confirm("Are you sure you want to clear your local data? Everything will be reset.")){
    localStorage.clear();
    alert("Your data was cleared.");
    location.reload();
  }else{
    return;
  }
}

function manualSave(){
  alert('wip');
}
