/**
 * HogeClassをインスタンス化するためのファクトリメソッド
 * @param {string} fuga HogeClassのコンストラクタ引数を指定
 * @return {Hoge} ←の{}の中にライブラリのGASプロジェクトと同じ名前を指定する。
 */


function table() {
  var table = FusionTables.Query.sql('SELECT Date, Weight FROM ' + "1EVdO0EqoyEK5S3qm1yWpWzz1-yMKoD4RUvl3-pVy")

  log(table)
  
  
  
}

(function() {
  //コンストラクタ
  function　csvEdit(filename, dir){
    this.filename = filename
    this.dir = DriveApp.getFolderById(dir)
    var files = this.dir.getFilesByName(filename)
    this.olddata = ""
    if(files.hasNext()){
      var f = files.next()
      this.data = Utilities.parseCsv(f.getBlob().getDataAsString())
    }
  }
  var p = csvEdit.prototype
  
  p.appendData = function(data){
    var f = this.dir.getFilesByName(this.filename)
    var olddata = ""
    if(f.hasNext()){
      var oldcsvFile = f.next()
      olddata = this.data.map(function(row){return row.join(",")}).join("\n") + "\n"
      this.dir.removeFile(oldcsvFile)
    }
    var out = olddata + data.map(function(row){return row.join(",")}).join("\n")
    var bl = Utilities.newBlob(out,"text/csv", this.filename)
    this.dir.createFile(bl)
    this.data = Utilities.parseCsv(out)
    return this
  }
  
  p.getdata = function(){
    return this.data
  }
  
  
  return csvEdit;
})();


/**
 * @param {id} String
 * @return {csvEdit}
 */

function getCsvFromId(){
  var id = "aa"
  try{
    var aa = DriveApp.getFileById(id).getBlob().getDataAsString()
  }
  catch(e){
    log(e.message)
    return e.message
  }
  log(aa)
  return new csvEdit()
}










