function beli(uang, obj, cb){
  console.log(`Saya pergi membeli ${obj.item}`)
  setTimeout(function(){
    let kembalian = uang - obj.harga
    if (kembalian > 0) {
      console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`);
      cb(kembalian)
    }else{
      console.log(`uang gk cukup nih buat beli ${obj.item} kembaliannya cuma ${kembalian}`);
      cb(0)
    }
  }, obj.waktu);
}

obj = {item: 'a', harga: 12, waktu: 20}
beli(10, obj, function(value){
  return value
})
