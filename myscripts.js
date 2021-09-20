let arr = [];
function makeGride(){
    let tbl = document.getElementById("tb");
    for(let i=0;i<16;i++)
    {
        arr[i] = [];

        
        for(let j=0;j<16;j++)
        {
            let myCell = document.createElement("myCell");
            myCell.className = "cells";
            myCell.id = "idd"+i+j;
            tbl.appendChild(myCell)
            arr[i].push(myCell);
        }
        document.write("\n");
    }
}

makeGride();





for(let ii=0;ii<16;ii++){
for(let jj=0;jj<16;jj++)
{


arr[ii][jj].onclick=function(){
  arr[ii][jj].style.background="green"; 
  getId(this);
}
function getId(btn)
{
alert(btn.id);
}



}
}














/*
document.addEventListener('DOMContentLoaded', (event) => {

    function handleDragStart(e) {
        this.style.opacity = '0.4';
      
        dragSrcEl = this;
      
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', this.innerHTML);
      }
      
  
    function handleDragEnd(e) {
      this.style.opacity = '1';
  
      items.forEach(function (item) {
        item.classList.remove('over');
      });
    }
  
    function handleDrop(e) {
        e.stopPropagation();
      
        if (dragSrcEl !== this) {
          dragSrcEl.innerHTML = this.innerHTML;
          this.innerHTML = e.dataTransfer.getData('text/html');
        }
      
        return false;
      }


      function handleDragOver(e) {
        if (e.preventDefault) {
          e.preventDefault();
        }
    
        return false;
      }
  
    function handleDragEnter(e) {
      this.classList.add('over');
    }
  
    function handleDragLeave(e) {
      this.classList.remove('over');
    }
  
    let items = document.querySelectorAll('.container1 .box');
    items.forEach(function(item) {
      item.addEventListener('dragstart', handleDragStart);
      item.addEventListener('dragover', handleDragOver);
      item.addEventListener('dragenter', handleDragEnter);
      item.addEventListener('dragleave', handleDragLeave);
      item.addEventListener('dragend', handleDragEnd);
      item.addEventListener('drop', handleDrop);
    });
  });
  
  */