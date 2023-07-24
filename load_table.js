function createAudioHTML(path, flat) {
  if (flat) {
    return '<audio controls controlslist="nodownload" class="px-1" style="width: 36vw;"> <source src=' +
        path +
        ' type="audio/wav">Your browser does not support the audio element.</audio>';
  }
  return '<audio controls controlslist="nodownload" class="px-1"> <source src=' +
      path +
      ' type="audio/wav">Your browser does not support the audio element.</audio>';
}


function generateEditTable(tableId, filenames, page) {
  let numPerPage = 4;
  let table = document.getElementById(tableId + '-generation');
  let nrRows = table.rows.length;
  for (let i = 1; i < nrRows; i++) {
    table.deleteRow(1);
  }
  const prefix = 'wavs/prompts_from_musiclm/' + tableId + '/';
  const end_idx = page * numPerPage;
  for (let i = (page - 1) * numPerPage; i < end_idx; i++) {
    let row = table.insertRow(i % numPerPage + 1);
    row.style.height = '80px';
    if (i < filenames.length) {
      let cell = row.insertCell(0);
      cell.innerHTML = filenames[i].replaceAll('-', ' ');
      cell.style.textAlign = "center";

      cell = row.insertCell(1);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '-MusicLM.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(2);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '-10s.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(3);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '-20s.wav', false);
      cell.style.textAlign = "center";
    } else {
      let cell = row.insertCell(0);
      cell.innerHTML = '<br>';
      cell = row.insertCell(1);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(2);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(3);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
    }
  }
}


add = [
  'add rhythm acoustic guitar',
  'add acoustic guitar',
  'add acoustic guitar',
  'accordion-rock',
  'accordion-techno',
]

generateEditTable('add', add  , 1);


$(document).ready(function() {
  for (let i = 1; i <= 3; i++) {
    let id = '#add-operation-' + i;
    $(id).click(function() {
      generateEditTable(
          'add',
          add, i);
      $(id).parent().siblings().removeClass('active');
      $(id).parent().addClass('active');
      return false;
    });
  }
});
