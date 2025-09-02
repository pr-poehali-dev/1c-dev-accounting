import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Blog = () => {
  const categories = [
    { name: 'Все статьи', count: 12, active: true },
    { name: '1С Настройка', count: 5 },
    { name: 'Налогообложение', count: 4 },
    { name: 'Бухучет', count: 3 }
  ];

  const articles = [
    {
      id: 1,
      title: 'Настройка 1С:Управление торговлей 8.3 с нуля',
      excerpt: 'Пошаговое руководство по настройке системы для малого и среднего бизнеса. Рассматриваем основные справочники, документы и отчеты.',
      category: '1С Настройка',
      author: 'Алексей Петров',
      date: '15 ноября 2024',
      readTime: '8 мин',
      image: '/img/205a8175-d46e-4cb7-b599-abcac2e615e0.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'Оптимизация налога на прибыль в 2024 году',
      excerpt: 'Актуальные способы законной оптимизации налога на прибыль. Анализ изменений в законодательстве и практические рекомендации.',
      category: 'Налогообложение',
      author: 'Мария Сидорова',
      date: '12 ноября 2024',
      readTime: '12 мин',
      image: '/img/c7e23fb3-10a8-474d-bde2-4d0b8fc81cc5.jpg',
      featured: true
    },
    {
      id: 3,
      title: 'Автоматизация складского учета в 1С',
      excerpt: 'Как правильно настроить складской учет, работу с остатками и автоматическое списание материалов в производстве.',
      category: '1С Настройка',
      author: 'Игорь Волков',
      date: '10 ноября 2024',
      readTime: '6 мин',
      image: '/img/f687970c-4e88-413f-8be5-b7d8d810b260.jpg'
    },
    {
      id: 4,
      title: 'НДС при экспорте: особенности учета',
      excerpt: 'Разбираем нюансы применения нулевой ставки НДС при экспортных операциях и требования к документообороту.',
      category: 'Налогообложение',
      author: 'Елена Кузнецова',
      date: '8 ноября 2024',
      readTime: '10 мин',
      image: '/img/6664ce3b-73fe-4c53-87e2-06c9ae72c310.jpg'
    },
    {
      id: 5,
      title: 'Интеграция 1С с интернет-магазином',
      excerpt: 'Обмен данными между 1С и популярными CMS. Настройка синхронизации товаров, остатков и заказов.',
      category: '1С Настройка',
      author: 'Дмитрий Морозов',
      date: '5 ноября 2024',
      readTime: '15 мин',
      image: '/img/d0947218-fba7-4b22-932c-726d4cfbcf54.jpg'
    },
    {
      id: 6,
      title: 'Управленческий учет: KPI и отчетность',
      excerpt: 'Построение системы управленческого учета в 1С. Настройка ключевых показателей эффективности и автоматических отчетов.',
      category: 'Бухучет',
      author: 'Анна Федорова',
      date: '3 ноября 2024',
      readTime: '11 мин',
      image: '/img/205a8175-d46e-4cb7-b599-abcac2e615e0.jpg'
    }
  ];

  const featuredArticles = articles.filter(article => article.featured);
  const regularArticles = articles.filter(article => !article.featured);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary">1С ДНА + SPYKH</Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-slate-600 hover:text-primary transition-colors">Главная</Link>
            <a href="/#services" className="text-slate-600 hover:text-primary transition-colors">Услуги</a>
            <a href="/#portfolio" className="text-slate-600 hover:text-primary transition-colors">Портфолио</a>
            <Link to="/blog" className="text-primary font-medium">Блог</Link>
            <a href="/#contacts" className="text-slate-600 hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="bg-primary hover:bg-primary/90">Консультация</Button>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-6">Экспертный блог</Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Статьи по 1С и налогообложению
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Практические советы, кейсы и решения от экспертов в области 1С-программирования и бухгалтерского учета
            </p>
            
            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input 
                placeholder="Поиск статей..." 
                className="pl-10 pr-4 py-3 text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Categories */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Категории</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors text-left ${
                      category.active 
                        ? 'bg-primary/10 text-primary' 
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <span className="font-medium">{category.name}</span>
                    <Badge variant="secondary" className="ml-2">{category.count}</Badge>
                  </button>
                ))}
              </CardContent>
            </Card>

            {/* Popular Articles */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Популярные статьи</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {articles.slice(0, 3).map((article) => (
                  <div key={article.id} className="flex gap-3">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                    />
                    <div>
                      <h4 className="font-medium text-sm leading-tight mb-1">
                        {article.title}
                      </h4>
                      <p className="text-xs text-gray-500">{article.date}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Newsletter */}
            <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <CardHeader>
                <CardTitle className="text-lg">Подписка на новости</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-slate-600">
                  Получайте новые статьи и обновления законодательства первыми
                </p>
                <Input placeholder="your@email.com" />
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Подписаться
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            {/* Featured Articles */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Рекомендуемые статьи</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {featuredArticles.map((article) => (
                  <Card key={article.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge variant="secondary">{article.category}</Badge>
                        <span className="text-sm text-gray-500 flex items-center">
                          <Icon name="Clock" size={14} className="mr-1" />
                          {article.readTime}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-slate-600 mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{article.author}</span>
                        <span>{article.date}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* All Articles */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Все статьи</h2>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">Сортировка:</span>
                  <Button variant="ghost" size="sm" className="text-primary">
                    По дате <Icon name="ChevronDown" size={16} className="ml-1" />
                  </Button>
                </div>
              </div>

              <div className="space-y-6">
                {regularArticles.map((article) => (
                  <Card key={article.id} className="group hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="grid md:grid-cols-4 gap-6">
                        <div className="md:col-span-1">
                          <img 
                            src={article.image} 
                            alt={article.title}
                            className="w-full aspect-video rounded-lg object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="md:col-span-3 space-y-3">
                          <div className="flex items-center gap-3">
                            <Badge variant="secondary">{article.category}</Badge>
                            <span className="text-sm text-gray-500 flex items-center">
                              <Icon name="Clock" size={14} className="mr-1" />
                              {article.readTime}
                            </span>
                          </div>
                          <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                            {article.title}
                          </h3>
                          <p className="text-slate-600">
                            {article.excerpt}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center text-sm text-gray-500">
                              <span>{article.author}</span>
                              <span className="mx-2">•</span>
                              <span>{article.date}</span>
                            </div>
                            <Button variant="ghost" size="sm" className="text-primary">
                              Читать далее
                              <Icon name="ArrowRight" size={16} className="ml-1" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" disabled>
                    <Icon name="ChevronLeft" size={16} />
                  </Button>
                  <Button size="sm" className="bg-primary text-white">1</Button>
                  <Button variant="outline" size="sm">2</Button>
                  <Button variant="outline" size="sm">3</Button>
                  <span className="px-2 text-gray-500">...</span>
                  <Button variant="outline" size="sm">10</Button>
                  <Button variant="outline" size="sm">
                    <Icon name="ChevronRight" size={16} />
                  </Button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">1С ДНА + SPYKH</div>
              <p className="text-gray-400">
                Профессиональные услуги 1С-программиста и бухгалтера. 
                Консультации по налогообложению и учету.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Разделы блога</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">1С Настройка</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Налогообложение</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Бухгалтерский учет</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Управленческий учет</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (XXX) XXX-XX-XX
                </p>
                <p className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  info@example.com
                </p>
                <p className="flex items-center">
                  <Icon name="MapPin" size={16} className="mr-2" />
                  г. Москва, ул. Примерная, д. 1
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 1С ДНА + SPYKH. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Blog;