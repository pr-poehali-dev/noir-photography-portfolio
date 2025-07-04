import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">
              <span className="text-white">NOIR</span>
              <span className="text-[#ff6b35]">LENS</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#works"
                className="text-gray-300 hover:text-[#ff6b35] transition-colors"
              >
                Works
              </a>
              <a
                href="#about"
                className="text-gray-300 hover:text-[#ff6b35] transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-gray-300 hover:text-[#ff6b35] transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              CAPTURING
            </span>
            <br />
            <span className="text-[#ff6b35] font-light">SHADOWS</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Репортажная фотография с драматичной душой. Каждый кадр — история,
            рассказанная через свет и тени.
          </p>
          <Button
            className="bg-[#ff6b35] hover:bg-[#e55a2b] text-white px-8 py-3 text-lg font-medium"
            onClick={() =>
              document
                .getElementById("works")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Посмотреть работы
            <Icon name="ArrowDown" className="ml-2" size={20} />
          </Button>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" className="text-gray-400" size={32} />
        </div>
      </section>

      {/* Works Section */}
      <section
        id="works"
        className="py-20 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">МОИ</span>
              <span className="text-[#ff6b35]"> РАБОТЫ</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Три направления творчества: репортаж, концептуальная фотография и
              студийная съёмка
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Reportage Photography */}
            <Card className="bg-gray-900 border-gray-800 overflow-hidden group hover:scale-105 transition-transform duration-300">
              <div className="relative">
                <img
                  src="/img/f88e374e-d842-438d-ae2f-9ae31654b9a0.jpg"
                  alt="Репортажная фотография"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <Icon
                    name="Camera"
                    className="text-[#ff6b35] mb-2"
                    size={28}
                  />
                  <h3 className="text-xl font-bold text-white mb-1">
                    Репортажная съёмка
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Живые эмоции и подлинные моменты
                  </p>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-400 mb-4">
                  Захватываю спонтанные моменты жизни, создавая визуальные
                  истории полные драматизма и подлинности.
                </p>
                <Button
                  variant="outline"
                  className="border-[#ff6b35] text-[#ff6b35] hover:bg-[#ff6b35] hover:text-white"
                >
                  Смотреть галерею
                </Button>
              </CardContent>
            </Card>

            {/* Conceptual Photography */}
            <Card className="bg-gray-900 border-gray-800 overflow-hidden group hover:scale-105 transition-transform duration-300">
              <div className="relative">
                <img
                  src="/img/27fe29b6-a763-4cb7-a2b6-9a19461a3a39.jpg"
                  alt="Концептуальная фотография"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <Icon
                    name="Lightbulb"
                    className="text-[#ff6b35] mb-2"
                    size={28}
                  />
                  <h3 className="text-xl font-bold text-white mb-1">
                    Концептуальная съёмка
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Художественные идеи в кадре
                  </p>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-400 mb-4">
                  Воплощаю абстрактные идеи в визуальные образы, создавая
                  сюрреалистичные композиции.
                </p>
                <Button
                  variant="outline"
                  className="border-[#ff6b35] text-[#ff6b35] hover:bg-[#ff6b35] hover:text-white"
                >
                  Смотреть галерею
                </Button>
              </CardContent>
            </Card>

            {/* Studio Photography */}
            <Card className="bg-gray-900 border-gray-800 overflow-hidden group hover:scale-105 transition-transform duration-300">
              <div className="relative">
                <img
                  src="/img/cd1c09c9-5984-4145-abce-0003704f2d8a.jpg"
                  alt="Студийная фотография"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <Icon
                    name="Palette"
                    className="text-[#ff6b35] mb-2"
                    size={28}
                  />
                  <h3 className="text-xl font-bold text-white mb-1">
                    Студийная съёмка
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Контролируемая драма света
                  </p>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-400 mb-4">
                  Создаю портреты с идеальным освещением, подчёркивая характер и
                  индивидуальность.
                </p>
                <Button
                  variant="outline"
                  className="border-[#ff6b35] text-[#ff6b35] hover:bg-[#ff6b35] hover:text-white"
                >
                  Смотреть галерею
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white">О</span>
                <span className="text-[#ff6b35]"> ФОТОГРАФЕ</span>
              </h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Я фотограф с нуарной душой, который не выходит из клетки
                репортажной фотографии. Каждый кадр для меня — это возможность
                рассказать историю через игру света и тени.
              </p>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Моя работа основана на контрастах: между светом и тьмой, между
                спонтанностью и продуманностью, между документальностью и
                художественностью. Я верю, что самые сильные эмоции рождаются в
                моменты неопределённости и драмы.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center space-x-2">
                  <Icon name="Award" className="text-[#ff6b35]" size={20} />
                  <span className="text-gray-300">5+ лет опыта</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Users" className="text-[#ff6b35]" size={20} />
                  <span className="text-gray-300">200+ проектов</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Heart" className="text-[#ff6b35]" size={20} />
                  <span className="text-gray-300">Индивидуальный подход</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg border border-gray-700">
                <Icon name="Quote" className="text-[#ff6b35] mb-4" size={32} />
                <blockquote className="text-lg text-gray-300 italic mb-4">
                  "Фотография — это не просто запечатление момента. Это способ
                  показать то, что скрыто от обычного взгляда, раскрыть драму
                  повседневности."
                </blockquote>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#ff6b35] rounded-full flex items-center justify-center">
                    <Icon name="User" className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      Фотограф NOIRLENS
                    </div>
                    <div className="text-gray-400 text-sm">
                      Творческий директор
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-t from-black to-gray-900"
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">СВЯЗАТЬСЯ</span>
              <span className="text-[#ff6b35]"> СО МНОЙ</span>
            </h2>
            <p className="text-xl text-gray-400">
              Готов воплотить ваши идеи в драматичных кадрах
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Обсудим проект
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Icon name="Mail" className="text-[#ff6b35] mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-white">Email</h4>
                    <p className="text-gray-400">contact@noirlens.photo</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Icon
                    name="Phone"
                    className="text-[#ff6b35] mt-1"
                    size={24}
                  />
                  <div>
                    <h4 className="font-semibold text-white">Телефон</h4>
                    <p className="text-gray-400">+7 (xxx) xxx-xx-xx</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Icon
                    name="MapPin"
                    className="text-[#ff6b35] mt-1"
                    size={24}
                  />
                  <div>
                    <h4 className="font-semibold text-white">Локация</h4>
                    <p className="text-gray-400">Москва, Россия</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Имя
                      </label>
                      <Input
                        className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                        placeholder="Ваше имя"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email
                      </label>
                      <Input
                        type="email"
                        className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Сообщение
                      </label>
                      <Textarea
                        className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 min-h-[120px]"
                        placeholder="Расскажите о вашем проекте..."
                      />
                    </div>
                    <Button className="w-full bg-[#ff6b35] hover:bg-[#e55a2b] text-white">
                      Отправить сообщение
                      <Icon name="Send" className="ml-2" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold mb-4 md:mb-0">
              <span className="text-white">NOIR</span>
              <span className="text-[#ff6b35]">LENS</span>
            </div>
            <div className="flex space-x-6">
              <Icon
                name="Instagram"
                className="text-gray-400 hover:text-[#ff6b35] cursor-pointer transition-colors"
                size={24}
              />
              <Icon
                name="Facebook"
                className="text-gray-400 hover:text-[#ff6b35] cursor-pointer transition-colors"
                size={24}
              />
              <Icon
                name="Twitter"
                className="text-gray-400 hover:text-[#ff6b35] cursor-pointer transition-colors"
                size={24}
              />
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 NOIRLENS. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
