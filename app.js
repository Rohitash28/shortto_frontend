var global_gradient = null;
var arr = ['red', 'meridian', 'sunset', 'timbr', 'pre-dawn', 'man-of-steel', 'instagram', 'sage', 'forest', 'deep-space', 'red-ocean', 'disco'];
changeColor('random');
function showMyLinks()
{
    document.getElementById('main-div').innerHTML = `
         <table class="table " style="overflow-y: scroll">
    <thead>
      <tr >
        <th>Date created</th>
        <th>Original URL</th>
        <th>Short URL</th>
        <th>Number of clicks</th>

      </tr>
    </thead>
    <tbody>
      <tr>
        <td>16/8/17</td>
        <td>http://www.makemoneywithurl.com/2014/10/best-paying-url-shortener-or-highest.html</td>
        <td>https://short.com/sduyat</td>
        <td>895</td>

      </tr>
       <tr>
        <td>16/8/17</td>
        <td>http://www.makemoneywithurl.com/2014/10/best-paying-url-shortener-or-highest.html</td>
        <td>https://short.com/sduyat</td>
        <td>895</td>

      </tr>
       <tr>
        <td>16/8/17</td>
        <td>http://www.makemoneywithurl.com/2014/10/best-paying-url-shortener-or-highest.html</td>
        <td>https://short.com/sduyat</td>
        <td>895</td>

      </tr>
    </tbody>
  </table>
  <button  class="shorted_url" onclick="location.href='https://shortto.com'">Short more URLs</button>

    `;
}
function changeColor(color) {

    switch (color) {
        case 'red':
            if (global_gradient != null) {
                document.body.classList.remove(global_gradient);
            }
            document.body.classList.add('red');
            global_gradient = 'red';
            break;
        case 'meridian':
            if (global_gradient != null) {
                document.body.classList.remove(global_gradient);
            }
            document.body.classList.add('meridian');
            global_gradient = 'meridian';
            break;
        case 'sunset':
            if (global_gradient != null) {
                document.body.classList.remove(global_gradient);
            }
            document.body.classList.add('sunset');
            global_gradient = 'sunset';
            break;

        case 'timbr':
            if (global_gradient != null) {
                document.body.classList.remove(global_gradient);
            }
            document.body.classList.add('timbr');
            global_gradient = 'timbr';
            break;

        case 'random':
            var idx = Math.floor(Math.random() * arr.length);

            if (global_gradient == arr[idx]) {
                idx = (idx + 1) % 11;
            }


            if (global_gradient != null) {
                document.body.classList.remove(global_gradient);
            }


            console.log(idx);
            document.body.classList.add(arr[idx]);
            global_gradient = arr[idx];
            break;
        default:
            break;
    }
}

function copy() {
    var txt = document.getElementById('short_url');
    txt.select();
    document.execCommand("Copy");
    document.getElementById('label_done').innerHTML = 'Your Short URL is made.(Copied)';
    setTimeout(function () {
        document.getElementById('label_done').innerHTML = 'Your Short URL is made.';
    }, 2000)
}