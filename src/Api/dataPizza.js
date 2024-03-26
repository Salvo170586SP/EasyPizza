
const data = [
  {
    "id": 1,
    "immagine": "https://it.ooni.com/cdn/shop/articles/Margherita-9920.jpg?crop=center&height=800&v=1644590028&width=800",
    "nome": "Pizza Margherita",
    "descrizione": "Una classica pizza italiana con salsa di pomodoro, mozzarella fresca e basilico.",
    "disponibilità": true,
    "recensione": 5,
    "size":
    {
      'piccola': 8.99,
      'familiare': 13.99
    }
  },
  {
    "id": 2,
    "immagine": "https://media-assets.lacucinaitaliana.it/photos/620fbf8588f5a214a3ad3e4b/3:2/w_1500,h_1000,c_limit/pizza-con-peperoni-olive-e-capperi.jpg",
    "nome": "Pizza Peperoni",
    "descrizione": "Una deliziosa pizza con salsa di pomodoro, mozzarella, e abbondante peperoni.",
    "disponibilità": true,
    "recensione": 3,
    "size":
    {
      'piccola': 10.99,
      'familiare': 15.99
    }

  },
  {
    "id": 3,
    "immagine": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCxCzQi_dwBw44avcsvcDBb9fgxwsmDtwNHvXcUCim3w&s",
    "nome": "Pizza Quattro Stagioni",
    "descrizione": "Una pizza divisa in quattro sezioni, ognuna rappresentando una stagione dell'anno, con una varietà di ingredienti.",
    "disponibilità": true,
    "recensione": 4,
    "size":
    {
      'piccola': 7.99,
      'familiare': 12.99
    }
  },
  {
    "id": 4,
    "immagine": "https://blog.giallozafferano.it/lericettediamanda/wp-content/uploads/2020/10/IMG_20201003_191155-1-320x303.jpg",
    "nome": "Pizza Vegetariana",
    "descrizione": "Una pizza con una selezione di verdure fresche come peperoni, cipolle, pomodori e funghi.",
    "disponibilità": true,
    "recensione": 2,
    "size":
    {
      'piccola': 6.99,
      'familiare': 11.99
    }
  },
  {
    "id": 5,
    "immagine": "https://wips.plug.it/cips/buonissimo.org/cms/2019/04/pizza-capricciosa.jpg",
    "nome": "Pizza Capricciosa",
    "descrizione": "Una pizza con prosciutto cotto, funghi, carciofi e olive nere.",
    "disponibilità": true,
    "recensione": 4,
    "size":
    {
      'piccola': 7.99,
      'familiare': 12.99
    }
  },
  {
    "id": 6,
    "immagine": "https://www.allrecipes.com/thmb/v1Xi2wtebK1sZwSJitdV4MGKl1c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hawaiian-pizza-ddmfs-3x2-132-450eff04ad924d9a9eae98ca44e3f988.jpg",
    "nome": "Pizza Hawaii",
    "descrizione": "Una pizza con prosciutto cotto, ananas e mozzarella.",
    "disponibilità": true,
    "recensione": 3,
    "size":
    {
      'piccola': 5.99,
      'familiare': 10.99
    }
  },
  {
    "id": 7,
    "immagine": "https://foodandchips.com/wp-content/uploads/2019/02/BFV36537_CC2017_2IngredintDough4Ways-FB.jpg",
    "nome": "Pizza Diavola",
    "descrizione": "Una pizza piccante con salame piccante, peperoncini e mozzarella.",
    "disponibilità": true,
    "recensione": 4,
    "size":
    {
      'piccola': 8.99,
      'familiare': 11.99
    }
  },
  {
    "id": 8,
    "immagine": "https://www.giallozafferano.it/images/154-15407/Pizza-marinara_650x433_wm.jpg",
    "nome": "Pizza Marinara",
    "descrizione": "Una pizza semplice con aglio, origano, e salsa di pomodoro.",
    "disponibilità": true,
    "recensione": 2,
    "size":
    {
      'piccola': 4.99,
      'familiare': 9.99
    }
  },
  {
    "id": 9,
    "immagine": "https://images.ctfassets.net/nw5k25xfqsik/4fHVjFojqqZwJbQQhMyU4y/f7f761202332fbc477d0e6306a9e6090/_AFL5245.jpg?w=1024",
    "nome": "Pizza Quattro Formaggi",
    "descrizione": "Una pizza con una combinazione di quattro formaggi diversi, come mozzarella, gorgonzola, parmigiano e provolone.",
    "disponibilità": true,
    "recensione": 1,
    "size":
    {
      'piccola': 7.99,
      'familiare': 13.99
    }
  },
  {
    "id": 10,
    "immagine": "https://media-cdn.tripadvisor.com/media/photo-s/13/bb/a2/eb/pizza-margherita-extra.jpg",
    "nome": "Pizza Margherita Extra",
    "descrizione": "Una variazione della classica pizza Margherita con pomodori freschi.",
    "disponibilità": true,
    "recensione": 5,
    "size":
    {
      'piccola': 7.99,
      'familiare': 9.99
    }
  },
  {
    "id": 11,
    "immagine": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfMmAc_0lKBJ1WnKxGqaC-STEFF4z6f9xE0IuAjjnYlw&s",
    "nome": "Pizza Bufalina",
    "descrizione": "Una pizza con mozzarella di bufala, pomodorini e basilico fresco.",
    "disponibilità": true,
    "recensione": 3,
    "size":
    {
      'piccola': 7.99,
      'familiare': 13.99
    }
  },
  {
    "id": 12,
    "immagine": "https://www.nieddittas.it/wp-content/uploads/2021/11/ricetta-pizza-frutti-di-mare.jpg",
    "nome": "Pizza Frutti di Mare",
    "descrizione": "Una pizza ricca di frutti di mare come gamberetti, cozze e vongole.",
    "disponibilità": true,
    "recensione": 3,
    "size":
    {
      'piccola': 10.99,
      'familiare': 15.99
    }
  },
  {
    "id": 13,
    "immagine": "https://media-assets.lacucinaitaliana.it/photos/645b90d8f783ffb60d878be3/4:3/w_1884,h_1413,c_limit/Calzone%20al%20forno.jpg",
    "nome": "Pizza Calzone",
    "descrizione": "Una pizza piegata a metà e ripiena con mozzarella, prosciutto cotto e funghi.",
    "disponibilità": true,
    "recensione": 4,
    "size":
    {
      'piccola': 7.99,
      'familiare': 11.99
    }
  },
  {
    "id": 14,
    "immagine": "https://www.fradiavolopizzeria.com/articoliImg/pizza-napoletana-storia-e-segreti-per-la-ricetta-dellimpasto-perfetto_1659000135.jpg",
    "nome": "Pizza Napoletana",
    "descrizione": "Una pizza tradizionale napoletana con pomodoro San Marzano, acciughe, olive e origano.",
    "disponibilità": true,
    "recensione": 3,
    "size":
    {
      'piccola': 8.99,
      'familiare': 10.99
    }
  },
  {
    "id": 15,
    "immagine": "https://cdn.cook.stbm.it/thumbnails/ricette/144/144902/hd1600x900.jpg",
    "nome": "Pizza Siciliana",
    "descrizione": "Una pizza tipica della Sicilia con pomodoro, cipolle, olive, e acciughe.",
    "disponibilità": true,
    "recensione": 5,
    "size":
    {
      'piccola': 8.99,
      'familiare': 12.99
    }
  },
  {
    "id": 16,
    "immagine": "https://wips.plug.it/cips/buonissimo.org/cms/2019/04/pizza-bianca-1.jpg",
    "nome": "Pizza Bianca",
    "descrizione": "Una pizza senza salsa di pomodoro, condita con olio d'oliva, aglio e rosmarino.",
    "disponibilità": true,
    "recensione": 3,
    "size":
    {
      'piccola': 5.99,
      'familiare': 9.99
    }
  },
  {
    "id": 17,
    "immagine": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS44BXgJHyfc6redzMZqHf8nQE7MUWRD4dU7XOeyjOdxQ&s",
    "nome": "Pizza Funghi",
    "descrizione": "Una pizza con salsa di pomodoro, mozzarella e funghi freschi.",
    "disponibilità": true,
    "recensione": 4,
    "size":
    {
      'piccola': 7.99,
      'familiare': 10.99
    }
  },
  {
    "id": 18,
    "immagine": "https://blog.giallozafferano.it/dulcisinforno/wp-content/uploads/2014/09/2484pizza-tonno-cipolla.jpg",
    "nome": "Pizza Tonno e Cipolla",
    "descrizione": "Una pizza con tonno, cipolle e mozzarella.",
    "disponibilità": true,
    "recensione": 3,
    "size":
    {
      'piccola': 8.99,
      'familiare': 11.99
    }
  },
  {
    "id": 19,
    "immagine": "https://media-cdn.tripadvisor.com/media/photo-s/10/90/53/56/pizza-quattro-carni.jpg",
    "nome": "Pizza Quattro Carni",
    "descrizione": "Una pizza con una selezione di quattro tipi di carne, come salame, prosciutto, pancetta e salsiccia.",
    "disponibilità": true,
    "recensione": 5,
    "size":
    {
      'piccola': 10.99,
      'familiare': 14.99
    }
  },
  {
    "id": 20,
    "immagine": "https://media-assets.lacucinaitaliana.it/photos/61fb0cea67a08706394daa8a/1:1/w_1000,h_1000,c_limit/pizza-in-teglia-alla-romana-ricetta-originali-preparazione-consigli-la-cucina-italiana.jpg",
    "nome": "Pizza Romana",
    "descrizione": "Una pizza croccante con pomodoro, acciughe, olive e origano.",
    "disponibilità": true,
    "recensione": 3,
    "size":
    {
      'piccola': 9.99,
      'familiare': 11.99
    }
  }
]

export default data;