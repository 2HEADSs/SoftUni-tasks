function deleteByEmail() {
  //   //select input field and get value
  //   let input = document.querySelector('input[name = "email"]');
  //   //get tbody children
  //   let rows = Array.from(document.querySelector('tbody').children);
  //   let removed = false;
  //   //repeat for every row
  //   //--select  second cell
  //   //--if textContent matches input value --> remove all
  //   for (let row of rows) {
  //     if (row.children[1].textContent == input.value) {
  //       row.remove();
  //       removed = true;
  //     }
  //   }
  //   // if there is a match -> print and deleted
  //   //otherwise -> print 'Not found'
  //   if (removed) {
  //     document.getElementById('result').textContent = 'Deleted!';
  //   } else {
  //     document.getElementById('result').textContent = 'Not found.';
  //   }
  //   input.value = '';
  //SECOND WAY OF THE TASK
  //select input field and get value
  //   let input = document.querySelector('input[name = "email"]');
  //   //get tbody children
  //   let rows = Array
  //         .from(document.querySelector('tbody').children)
  //         .filter((r) => r.children[1].textContent == input.value);
  //   rows.forEach(r => r.remove());
  //     document.getElementById('result').textContent = rows.length > 0 ? 'Deleted.' : 'Not found.';
  //   input.value = '';

  ///TEST
  let input = document.querySelector('input[name = "email"]');
    let rows = Array.from(document.querySelector('tbody').children);
    console.log(rows[0].children[1].textContent);
}

