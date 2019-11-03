$('document').ready(function () {
  $(document).ready(function () {
    $('#mytable').DataTable({

      "ajax": "Data/objects.json",
      "sAjaxDataProp": "faculty",
      "columns": [{
          "data": "id"
        },
        {
          "data": "name"
        },
        {
          "data": "Designation"
        },
        {
          "data": "Qualification"
        },
        {
          "data": "Specialization"
        },
        {
          "data": "email"
        }
      ],
      dom: 'lBfrtip',
      buttons: [{
          extend: 'copy',
          text: '<span > Copy <i class="fas fa-copy"></i></span>',
          className: 'btn btn-outline-info btn-lg mx-sm-3',
          titleAttr: 'Copy table'
        },
        {
          extend: 'pdfHtml5',
          download: 'open',
          text: '<span > Export <i class="fa fa-file-pdf-o" aria-hidden="true"></i></span>',
          className: 'btn btn-outline-danger btn-lg mr-sm-3',
          titleAttr: 'Export to PDF'
        },
        {
          extend: 'excelHtml5',
          text: '<span> Export <i class="fa fa-file-excel-o" aria-hidden="true"></i></span>',
          className: 'btn btn-outline-success btn-lg mr-sm-3',
          titleAttr: 'Export to Excel'
        },
        {
          extend: 'csv',
          text: '<span> Export <i class="fas fa-file-csv"></i></span>',
          className: 'btn btn-outline-primary btn-lg mr-sm-3',
          titleAttr: 'Export to CSV'
        },
        {
          extend: 'print',
          text: '<span>Print <i class="fa fa-print" aria-hidden="true"></i></span>',
          className: 'btn btn-outline-secondary btn-lg mr-sm-3 mt-sm-0 mt-2',
          titleAttr: 'Print',

          exportOptions: {
            modifier: {
              selected: null
            }
          }
        }
      ],
      select: true
    });
  });

});