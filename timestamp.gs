function onEdit() {
  
  var s = SpreadsheetApp.getActiveSheet();
  if( s.getName() == "ENE" || "FEB" ||"MAR" || "ABR" || "MAY" || "JUN" ||"JUL" || "AGO" || "SEP" || "OCT" || "NOV" || "DIC") { //checks that we're on the correct sheet
    var r = s.getActiveCell();
           
    if(( r.getColumn() == 2 ) && (r.getValue()=='ENTRAR') ){ //checks the column
      var nextCell = r.offset(0, 1);
     // if( nextCell.getValue() == 'ENTRAR' ) //is empty?
      nextCell.setValue(new Date());
      }

   if(( r.getColumn() == 4 ) && (r.getValue()=='SALIR') ){
      var nextCell = r.offset(0, 1);
      //if( nextCell.getValue() !== '' ) //is empty?
      nextCell.setValue(new Date());
    }

  }
}
