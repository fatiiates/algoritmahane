# HİYERARŞİK DÜZEN
  
```bash
├── src
│   ├── api 
│   │   ├── post 
│   │   │   ├── search [METHOD: POST, DATA: { array: string, searched: string }]
│   │   │   |   ├── info # İnfo dizini altında 'data' parametresi gerekmez.
│   │   │   │   |   ├── Binary.md
│   │   │   │   |   └── Linear.md
│   │   │   │   ├── BinarySearch.ts
│   │   │   │   └── LinearSearch.ts
│   │   │   ├── sort [METHOD: POST, DATA: { array: string }] 
│   │   │   |   ├── info # İnfo dizini altında 'data' parametresi gerekmez.
│   │   │   │   |   ├── Bucket.md
│   │   │   │   |   ├── Counting.md
│   │   │   │   |   ├── Heap.md
│   │   │   │   |   ├── Insertion.md
│   │   │   │   |   ├── Merge.md
│   │   │   │   |   ├── Quick.md
│   │   │   │   |   └── Radix.md
│   │   │   │   ├── BucketSort.ts
│   │   │   │   ├── CountingSort.ts 
│   │   │   │   ├── HeapSort.ts 
│   │   │   │   ├── InsertionSort.ts 
│   │   │   │   ├── MergeSort.ts 
│   │   │   │   ├── QuickSort.ts
│   │   │   │   └── RadixSort.ts
│   │   └── index.ts 
│   ├── components
│   │   ├── main (Ortak bileşenler)
│   │   ├── material (Material-ui varsayılan dosyaları)
│   │   ├── pages (Sayfa içerikleri)
│   │   └── root (Kendi oluşturduğumuz bileşenler)
│   ├── constants
│   │   └── types (Değişkenler için tip tanımları)
│   ├── pages (www.yourdomain.com/ altında açılacak uç noktalar)
│   │   ├── api
│   │   │   ├── search 
│   │   │   |   ├── info 
│   │   │   │   |   └── [algoritma_adı]
│   │   │   │   ├── binary
│   │   │   │   └── linear
│   │   │   ├── sort
│   │   │   |   ├── info 
│   │   │   │   |   └── [algoritma_adı]
│   │   │   │   ├── bucket
│   │   │   │   ├── counting
│   │   │   │   ├── heap
│   │   │   │   ├── insertion
│   │   │   │   ├── merge
│   │   │   │   ├── quick
│   │   │   │   └── radix
│   │   │   └── index
│   │   ├── _app.tsx (Next.js sayfa konfigürasyonları)
│   │   ├── _document.tsx (Next.js sayfalarını çerçeveleyen döküman konfigürasyonları)
│   │   ├── _providers.tsx (Uygulama kapsayıcıları)
│   │   ├── ./* (Bulunan her dosya bir uç nokta olarak açılır)
│   ├── public/static (Web adresinin statik dosyaları)
|   ├── redux
│   │   ├── actions (Redux actions)
│   │   └── reducers (Redux reducers)
│   ├── next-env.d.ts
│   ├── next.config.js
│   └── tsconfig.json
├── .gitignore
├── LICENSE
├── README.md
├── package-lock.json
├── package.json
└── yarn.lock
```
## GEREKSİNİMLER
- NodeJS ^14.15.0
- npm ^6.14.8

## KURULUM

Node.js'i bilgisayarınıza aşağıdaki linkten indirip kurabilirsiniz  
https://nodejs.org/en/  

Node.js kurulduktan sonra reponun klonladığı klasöre komut satırı aracılığıyla girerek   
(örn: cd algorithm-analysis-and-design) aşağıdaki komutu çalıştırmalısınız.

    npm i --save
    
Kodları derlemek için;

    npm run build

Modüller kurulduktan sonra aşağıdaki komut ile başlatabilirsiniz varsayılan olarak localhost:3000 adresinde siteniz hazır halde açılacaktır.

    npm run start
    
# GÖRÜNTÜLER
Anasayfa - Light Mode
![image](https://user-images.githubusercontent.com/51250249/104730102-7a8a1c00-574a-11eb-9824-e6244b9d487a.png)
Anasayfa - Dark Mode
![image](https://user-images.githubusercontent.com/51250249/104730177-a0172580-574a-11eb-9019-6ad16742c967.png)
Bilgi sayfası - Dark Mode
![image](https://user-images.githubusercontent.com/51250249/104730247-bf15b780-574a-11eb-8376-54c4c1fd01d4.png)

