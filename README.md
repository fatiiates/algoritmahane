# HİYERARŞİK DÜZEN
  
```bash
├── src
│   ├── api 
│   │   ├── post 
│   │   │   ├── search 
│   │   │   |   ├── info 
│   │   │   │   |    ├── Binary.md
│   │   │   │   |    └── Linear.md
│   │   │   │   ├── BinarySearch.ts
│   │   │   │   └── LinearSearch.ts
│   │   │   ├── sort
│   │   │   |   ├── info 
│   │   │   │   |    ├── Bucket.md
│   │   │   │   |    ├── Counting.md
│   │   │   │   |    ├── Heap.md
│   │   │   │   |    ├── Insertion.md
│   │   │   │   |    ├── Merge.md
│   │   │   │   |    ├── Quick.md
│   │   │   │   |    └── Radix.md
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
│   │   │   │   |    └── [algoritma_adı]
│   │   │   │   ├── binary
│   │   │   │   └── linear
│   │   │   ├── sort
│   │   │   |   ├── info 
│   │   │   │   |    └── [algoritma_adı]
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

### NodeJS Mevcut Değilse 

Proje NodeJS üzerinde çalışmaktadır. NodeJs kurulu değilse aşağıdaki adres üzerinden indirebilirsiniz;
> NodeJS: https://nodejs.org/en/
