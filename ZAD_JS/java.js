document.querySelector('#push').onclick = function () {
    if(document.querySelector('#newtask input').value.length === 0) {
      alert("Molimo vas unesite namirnicu!")
    }
    else{
      document.querySelector('#tasks').innerHTML
      

        var current_tasks = document.querySelector('.delete');
        for(var i=0; i<current_tasks.length; i++)
        {
          current_tasks[i].onclick = function()
          {
            this.parentNode.remove();
          }
        }
    }
  }
