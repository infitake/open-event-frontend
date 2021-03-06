import Controller from '@ember/controller';

export default Controller.extend({
  columns: [
    {
      propertyName     : 'recipient',
      title            : 'To',
      disableSorting   : true,
      disableFiltering : true
    },
    {
      propertyName : 'time',
      template     : 'components/ui-table/cell/admin/reports/system-logs/activity-logs/cell-time',
      title        : 'Time'
    },
    {
      propertyName     : 'action',
      title            : 'Actions',
      disableSorting   : true,
      disableFiltering : true
    },
    {
      propertyName     : 'message',
      title            : 'Message',
      template         : 'components/ui-table/cell/admin/reports/system-logs/mail-logs/cell-mail-message',
      disableSorting   : true,
      disableFiltering : true
    }
  ]
});
