//* Blog Route

const router = require("express").Router();

const { BlogPostController:BlogPostControllerView,BlogCategoryController } = require("../controllers/blogControllerView");
// const isAuth = require("../middlewares/isAuth")


//? Browserlardan sadce ve sadece GET isteği gelir. HTML Form aracılığıyla sadece GET ve POST isteği gelir. O nedenle route planlaması yaparken diğer istekler için ona uygun bir planlama yapılmalıdır.

//* method olarak get ve post diye de kullanılabilir. Yada all metodu kullanılarak controllerda gelen istek kontrol edilebilir.


//! base route => /
//* / anasayfayı viewe verdiğimiz için projemiz ayaga kalkdığında hatalı sayfa gelecektiir çünkü routeu bulamayacaktır. Çünkü /post şeklinde ayarlama yaptım. Bunun sebebi de ilerleyen süreçlerde yeni routelar eklenebilir diye. Bunun i,çin ana sayfay istek geldiğinde /post a yönlendirme yaptırabilirim:
router.all('/', (req,res)=>{
  res.redirect('/post')
})

router.all("/post", BlogPostControllerView.list);
router.all("/post/create", BlogPostControllerView.create);
router.all("/post/:postId/update", BlogPostControllerView.update); 
router.all("/post/:postId", BlogPostControllerView.read); 
router.all("/post/:postId/delete", BlogPostControllerView.delete); 



module.exports = router;
