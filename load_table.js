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
  let table = document.getElementById(tableId + '-operation');
  let nrRows = table.rows.length;
  for (let i = 1; i < nrRows; i++) {
    table.deleteRow(1);
  }
  const prefix = 'music/edit_' + tableId + '/';
  const end_idx = page * numPerPage;
  for (let i = (page - 1) * numPerPage; i < end_idx; i++) {
    let row = table.insertRow(i % numPerPage + 1);
    row.style.height = '80px';
    if (i < filenames.length) {
      let cell = row.insertCell(0);
      let reg = /[0-9]+/g;
      let command = filenames[i].replace(reg,"");
      cell.innerHTML = command.replaceAll('_', ' ');
      cell.style.textAlign = "center";

      cell = row.insertCell(1);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_source.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(2);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_target.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(3);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_instructme.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(4);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_audit.wav', false);
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
      cell = row.insertCell(4);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
    }
  }
}

function generateRemixTable(tableId, filenames, page) {
  let numPerPage = 4;
  let table = document.getElementById(tableId + '-operation');
  let nrRows = table.rows.length;
  for (let i = 1; i < nrRows; i++) {
    table.deleteRow(1);
  }
  const prefix = 'music/remix_' + tableId + '/';
  const end_idx = page * numPerPage;
  for (let i = (page - 1) * numPerPage; i < end_idx; i++) {
    let row = table.insertRow(i % numPerPage + 1);
    row.style.height = '80px';
    if (i < filenames.length) {
      let cell = row.insertCell(0);
      let reg = /[0-9]+/g;
      let command = filenames[i].replace(reg,"");
      cell.innerHTML = command.replaceAll('_', ' ');
      cell.style.textAlign = "center";

      cell = row.insertCell(1);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_source_acc.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(2);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_source_melody.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(3);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_target_acc.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(4);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_target_melody.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(5);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_instructme_acc.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(6);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_instructme_melody.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(7);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_audit_acc.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(8);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_audit_melody.wav', false);
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
      cell = row.insertCell(4);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(5);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(6);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(7);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(8);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
    }
  }
}


add = [
  'add_acoustic_guitar_1',
  'add_bass_42',
  'add_drum_kit_47',
  'add_acoustic_guitar_11',
  'add_piano_16',
  'add_drum_kit_49',
  'add_drum_kit_55',
  'add_piano_19',
  'add_piano_25',
  'add_rhythm_acoustic_guitar_0',
]
remove = ['remove_drum_kit_109', 'remove_drum_kit_110', 'remove_bass_96', 'remove_piano_76', 'remove_drum_kit_107', 'remove_electric_piano_83', 'remove_acoustic_guitar_68', 'remove_rhythm_acoustic_guitar_69', 'remove_acoustic_guitar_62', 'remove_piano_79']
extract = ['extract_drum_kit_172', 'extract_drum_kit_166', 'extract_rhythm_acoustic_guitar_123', 'extract_bass_153', 'extract_electric_piano_136', 'extract_piano_141', 'extract_piano_142', 'extract_acoustic_guitar_126', 'extract_drum_kit_178', 'extract_rhythm_acoustic_guitar_128']
replace = ['replace_rhythm_acoustic_guitar_with_drum_kit_202', 'replace_bass_with_piano_207', 'replace_bass_with_drum_kit_219', 'replace_bass_with_electric_guitar_236', 'replace_acoustic_guitar_with_drum_kit_189', 'replace_pedal_steel_guitar_with_bass_181', 'replace_pedal_steel_guitar_with_drum_kit_192', 'replace_bass_with_electric_guitar_227', 'replace_drum_kit_with_bass_239', 'replace_bass_with_electric_guitar_182']

instr = ['remix_with_guitar_drums_piano_synth_lead_20', 'remix_with_drums_piano_guitar_bass_3', 'remix_with_drums_piano_12', 'remix_with_bass_piano_strings_1', 'remix_with_bass_guitar_drums_2', 'remix_with_guitar_piano_strings_drums_bass_10', 'remix_with_piano_drums_strings_bass_guitar_11', 'remix_with_guitar_strings_synth_pad_bass_piano_13', 'remix_with_guitar_drums_bass_piano_strings_17', 'remix_with_bass_synth_lead_strings_piano_drums_18']

genre = ['remix_to_pop_genre_10', 'remix_to_blues_genre_5', 'remix_to_r_and_b_genre_14', 'remix_to_funk_genre_3', 'remix_to_soul_genre_6', 'remix_to_alternative_genre_2', 'remix_to_r_and_b_genre_12', 'remix_to_rock_genre_9', 'remix_to_disco_genre_15', 'remix_to_pop_genre_13']

generateEditTable('add', add  , 1);
generateEditTable('remove', remove  , 1);
generateEditTable('extract', extract  , 1);
generateEditTable('replace', replace  , 1);

generateRemixTable('instr', instr  , 1);
generateRemixTable('genre', genre  , 1);


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

$(document).ready(function() {
  for (let i = 1; i <= 3; i++) {
    let id = '#remove-operation-' + i;
    $(id).click(function() {
      generateEditTable(
          'remove',
          remove, i);
      $(id).parent().siblings().removeClass('active');
      $(id).parent().addClass('active');
      return false;
    });
  }
});

$(document).ready(function() {
  for (let i = 1; i <= 3; i++) {
    let id = '#extract-operation-' + i;
    $(id).click(function() {
      generateEditTable(
          'extract',
          extract, i);
      $(id).parent().siblings().removeClass('active');
      $(id).parent().addClass('active');
      return false;
    });
  }
});

$(document).ready(function() {
  for (let i = 1; i <= 3; i++) {
    let id = '#replace-operation-' + i;
    $(id).click(function() {
      generateEditTable(
          'replace',
          replace, i);
      $(id).parent().siblings().removeClass('active');
      $(id).parent().addClass('active');
      return false;
    });
  }
});

$(document).ready(function() {
  for (let i = 1; i <= 3; i++) {
    let id = '#instr-operation-' + i;
    $(id).click(function() {
      generateEditTable(
          'instr',
          instr, i);
      $(id).parent().siblings().removeClass('active');
      $(id).parent().addClass('active');
      return false;
    });
  }
});

$(document).ready(function() {
  for (let i = 1; i <= 3; i++) {
    let id = '#genre-operation-' + i;
    $(id).click(function() {
      generateEditTable(
          'genre',
          genre, i);
      $(id).parent().siblings().removeClass('active');
      $(id).parent().addClass('active');
      return false;
    });
  }
});