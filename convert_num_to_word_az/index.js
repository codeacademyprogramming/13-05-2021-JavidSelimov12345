function numberToAzerbaijani( n ) {
        
    var string = n.toString(), units, tens, scales, start, end, chunks, chunksLen, chunk, ints, i, word, words;

    /* boşluqları təmizləyir */
    string = string.replace(/[, ]/g,"");

    /* Reqem sifirdirmi? */
    if( parseInt( string ) === 0 ) {
        return 'sıfır';
    }
    
    /* 10 dek */
    units = [ '', 'bir', 'iki', 'üç', 'dörd', 'beş', 'altı', 'yeddi', 'səkkiz', 'doqquz' ];
    
    /* 10~ den 100 */
    tens = [ '', 'on', 'iyirmi', 'otuz', 'qırx', 'əlli', 'altmış', 'yetmiş', 'səksən', 'doxsan' ];
    
    /* boyuk */
    scales = [ '', 'min', 'milyon', 'milyard', 'trilyon', 'kvadrilyon', 'kvantilyon', 'sektilyon', 'septilyon', 'oktilyon', 'nonilyon', 'desilyon', 'andesilyon', 'dodesilyon', 'tredesilyon', 'kvattordesilyon', 'kvindesilyon', 'sedesilyon', 'septen-desilyon', 'oktadesilyon', 'novemdesilyon', 'vigintilyon', 'sentillion' ];
    
    /* user argumentini soldan saga 3 reqemli hisselere ayirmaq */
    start = string.length;
    chunks = [];
    while( start > 0 ) {
        end = start;
        chunks.push( string.slice( ( start = Math.max( 0, start - 3 ) ), end ) );
    }
    
   
    /* userin argumentini cevirmek ucun boyuk dereceli  sozun oldugunu yoxlamaq ucun */
    chunksLen = chunks.length;
    if( chunksLen > scales.length ) {
        return '';
    }
    
    
    /* Her hissede her integeri stringify etmek ucun */
    words = [];
    for( i = 0; i < chunksLen; i++ ) {
        
        chunk = parseInt( chunks[i] );
        
        if( chunk ) {
            
            
            /* her üçlü hisseni ferdi integerlerden ibaret arraya cevirir */
            ints = chunks[i].split( '' ).reverse().map( parseFloat );
        
          
            
             /*  eger 3 lu hisse sifir deyilse ve arrayin itemi movcuddursa scale arrayindaki sozu elave et*/
            if( ( word = scales[i] ) ) {
                words.push( word );
            }
            
            
            /* eger arrayin itemi movcuddursa  unitdeki sozu elave et*/
            if( ( word = units[ ints[0] ] ) ) {
                words.push( word );
            }
            
            
            /* aaraydaki item movcuddursa tens arrayindaki sozu elave et */
            if( ( word = tens[ ints[1] ] ) ) {
                words.push( word );
            }
            
           
            
            
            /* array itemi movcuddursa yuz sozuni elave et */
            if( ( word = units[ ints[2] ] ) ) {
                words.push( word + ' yüz' );
            }
            
        }
        
    }
    
    return words.reverse().join( ' ' );
    
}
// console.log(numberToAzerbaijani( 99))