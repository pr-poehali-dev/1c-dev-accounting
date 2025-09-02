import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">1С ДНА + SPYKH</div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-slate-600 hover:text-primary transition-colors">Главная</a>
            <a href="#services" className="text-slate-600 hover:text-primary transition-colors">Услуги</a>
            <a href="#portfolio" className="text-slate-600 hover:text-primary transition-colors">Портфолио</a>
            <a href="#contacts" className="text-slate-600 hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="bg-primary hover:bg-primary/90">Консультация</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-blue-50 to-white py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Экспертные услуги</Badge>
              <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                1С программист + бухгалтер
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Профессиональные консультации по налогообложению и учету. 
                Настройка 1С под ваш бизнес с гарантией качества.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Icon name="Phone" className="mr-2" size={20} />
                  Получить консультацию
                </Button>
                <Button variant="outline" size="lg">
                  <Icon name="Play" className="mr-2" size={20} />
                  Посмотреть портфолио
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/d0947218-fba7-4b22-932c-726d4cfbcf54.jpg" 
                alt="Профессиональный бухгалтер за работой"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-6">Услуги</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Экспертные услуги</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Комплексные решения для автоматизации учета и налогообложения
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon name="Calculator" size={24} className="text-primary" />
                </div>
                <CardTitle className="text-xl">Консультации по налогообложению</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Профессиональные консультации по оптимизации налогов, 
                  ведению учета и соблюдению требований законодательства.
                </p>
                <ul className="space-y-2 text-sm text-slate-500">
                  <li className="flex items-center"><Icon name="Check" size={16} className="mr-2 text-green-600" />Налоговое планирование</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="mr-2 text-green-600" />Ведение учетной политики</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="mr-2 text-green-600" />Подготовка отчетности</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon name="Database" size={24} className="text-primary" />
                </div>
                <CardTitle className="text-xl">Настройка 1С</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Полная настройка системы 1С под специфику вашего бизнеса.
                  Обучение сотрудников и техническая поддержка.
                </p>
                <ul className="space-y-2 text-sm text-slate-500">
                  <li className="flex items-center"><Icon name="Check" size={16} className="mr-2 text-green-600" />Настройка конфигурации</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="mr-2 text-green-600" />Обучение персонала</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="mr-2 text-green-600" />Техническая поддержка</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon name="TrendingUp" size={24} className="text-primary" />
                </div>
                <CardTitle className="text-xl">Консультации по учету</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Экспертные консультации по бухгалтерскому и управленческому учету.
                  Оптимизация бизнес-процессов.
                </p>
                <ul className="space-y-2 text-sm text-slate-500">
                  <li className="flex items-center"><Icon name="Check" size={16} className="mr-2 text-green-600" />Постановка учета</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="mr-2 text-green-600" />Управленческая отчетность</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="mr-2 text-green-600" />Аудит процессов</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-6">Портфолио</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Реализованные проекты</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Примеры успешно выполненных проектов по автоматизации учета
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="/img/f687970c-4e88-413f-8be5-b7d8d810b260.jpg" 
                  alt="Настройка 1С для производственной компании"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Автоматизация производственного учета</h3>
                <p className="text-slate-600 mb-4">
                  Полная настройка 1С:Управление производственным предприятием для металлообрабатывающего завода. 
                  Внедрение модулей планирования и контроля производства.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">1С:УПП</Badge>
                  <Badge variant="secondary">Производство</Badge>
                  <Badge variant="secondary">Планирование</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="/img/6664ce3b-73fe-4c53-87e2-06c9ae72c310.jpg" 
                  alt="Консультации по налогообложению"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Оптимизация налогообложения торговой сети</h3>
                <p className="text-slate-600 mb-4">
                  Консультации по налоговому планированию для сети розничных магазинов. 
                  Снижение налоговой нагрузки на 25% при полном соблюдении законодательства.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Налоги</Badge>
                  <Badge variant="secondary">Розничная торговля</Badge>
                  <Badge variant="secondary">НДС</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-6">Контакты</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Свяжитесь с нами</h2>
              <p className="text-xl text-slate-600 mb-8">
                Готовы обсудить ваш проект? Оставьте заявку, и мы свяжемся с вами в течение часа.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Phone" size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Телефон</h3>
                    <p className="text-slate-600">+7 (XXX) XXX-XX-XX</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Mail" size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-slate-600">info@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="MapPin" size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Адрес</h3>
                    <p className="text-slate-600">г. Москва, ул. Примерная, д. 1</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle>Оставить заявку</CardTitle>
              </CardHeader>
              <CardContent className="px-0 space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Имя *</label>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон *</label>
                    <Input placeholder="+7 (XXX) XXX-XX-XX" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input placeholder="your@email.com" type="email" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea 
                    placeholder="Опишите ваш проект или вопрос..."
                    rows={4}
                  />
                </div>
                
                <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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
              <h3 className="text-lg font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-white transition-colors">Консультации по налогам</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Настройка 1С</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Ведение учета</a></li>
                <li><a href="#portfolio" className="hover:text-white transition-colors">Портфолио</a></li>
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

export default Index;