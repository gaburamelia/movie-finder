<h1 align="center">
Movie finder
  </h1>
<h2>
Introducere
  </h2>
 <p>Aplicatia reprezinta o cale alternativa mai eficienta de cautare a filmelor pe care dorim sa le vizionam. Arhitectura aplicatiei este de tip Single Page Application accesibila in browser. Publicul tinta este reprezentat de orice persoana care nu se poate decide in alegerea unui film de calitate.
 </p>
<h2>
Descrierea problemei
  </h2>
<p>
Aplicatia a fost gandita astfel incat sa ajute utilizatorul sa gaseasca rapid informatii succinte despre filmul pe care doreste sa-l vizioneze. Problema care a stat la baza crearii acestei aplicatii a fost timpul pe care il pierdem atunci cand vizionam filme care nu sunt chiar pe placul nostru. Trebuie sa recunoastem ca este destul de greu sa facem o alegere in functie de informatiile pe care le gasim pe la cunoscuti, televizor, publicitate, de cele mai multe ori sunt promovate filme ieftine si slabe sau prea comerciale. Solutia cu care vine aceasta aplicatie este furnizarea unei descrieri succinte a filmului pe care il cautam si a rating-ului acestuia.
</p>
<p> 
Pentru a putea utiliza aceasta aplicatie trebuie sa ne logam cu un cont de google, fiind o modalitatea mai utila. Astfel, timpul de accesare este redus foarte mult fata de alte pagini web care iti impun crearea unui cont special pentru a putea avea acces la informatiile si functionalitatile acestora.
</p>
<h2>
Descriere API
  </h2>  
La baza acestei aplicatii stau doua API-uri. Unul dintre API-urile utilizate este furnizat de catre Google, cu ajutorul acestuia putandu-se face logarea pe aplicatie cu ajutorul contului de google pe care il avem. Cel de al doilea API este API-ul OMDb. Acesta este un serviciu web RESTful pentru a obține informații despre filme, conținut, imagini si despre rating.
<h2>Flux de date</h2>
<p>
  Primul request in cadrul acestei aplicatii este introducerea numelui filmului pe care dorim sa-l cautam.</p>
   <img src = "https://user-images.githubusercontent.com/83892815/117584439-b5f39080-b115-11eb-91e6-03053d95ee84.jpeg" width = "500" />
 <p> Ca response pagina ne va furniza o lista cu filme care au incluse in sintaxa lor denumirea pe care am introdus-o. </p>
 <img src =  "https://user-images.githubusercontent.com/83892815/117584500-0bc83880-b116-11eb-8d7f-e1d2167f3434.jpeg " width = "500" />
<p>Apoi urmatorul request pe care il mai putem face este seletarea filmului dorit din lista pe care ne-a generat-o, urmand ca a primi ca si raspuns descrierea, rating-ul acestuia.</p>
 <p> Metoda HTTP utilizata este cea de GET care ne ajuta in cazul nostru sa cautam filmele pe care le dorim si detaliile despre acestea.</p>
 <p> Pentru a putea utiliza API OMDb am avut nevoie de un apikey, cel furnizat de catre acesta are o limita de o 1000 de accesari pe zi (apikey=6bb2d225). De asemenea si pentru API-ul furnizat de google am avut nevoie de obtinerea unor credentiale, in urma carora am primit un ID de client (clientId = "671863786229-bdpn2863uk4tf7doac20mvjuvlmrfdmp.apps.googleusercontent.com"). </p>
 <h2>Capturi de ecran aplicație</h2>
 Pagina de logare
 <img src = "https://user-images.githubusercontent.com/83892815/117584356-2352f180-b115-11eb-8585-3ca668528cc7.jpeg" width = "500" />
 Detalii film
  <img src = "https://user-images.githubusercontent.com/83892815/117584586-70839300-b116-11eb-94a1-80ea6eff64a1.jpeg" width = "500" />
