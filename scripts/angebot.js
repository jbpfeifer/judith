var History = History;

$ ( '#geriatrie2' ).click(function(){
  'use strict';  
  $( '#content' ).load('content/geriatrie-content.html');
  History.pushState(null,null,'geriatrie.html');
});

$ ( '#neuro2' ).click(function(){
  'use strict';  
  $( '#content' ).load('content/neurologie-content.html');
  History.pushState(null,null,'neurologie.html');
});

$ ( '#ortho2' ).click(function(){
  'use strict';  
  $( '#content' ).load('content/ortho-content.html');
  History.pushState(null,null,'orthopaedie.html');
});

$ ( '#behindertenb2' ).click(function(){
  'use strict';  
  $( '#content' ).load('content/behindertenb-content.html');
  History.pushState(null,null,'behindertenbereich.html');
});

$ ( '#paediatrie2' ).click(function(){
  'use strict';  
  $( '#content' ).load('content/paediatrie-content.html');
  History.pushState(null,null,'paediatrie.html');
});

$ ( '#gartentherapie2' ).click(function(){
  'use strict';  
  $( '#content' ).load('content/gartentherapie-content.html');
  History.pushState(null,null,'gartentherapie.html');
}); 

