let proccesElement1 = document.getElementById('proccesElement1');
let proccesElement2 = document.getElementById('proccesElement2');

let ctx1 = proccesElement1.getContext('2d');
let ctx2 = proccesElement2.getContext('2d');

ctx1.fillStyle = '#fff';
ctx1.fillRect(0, 0, 44, 44);
ctx1.fillRect(43, 40, 44, 44);
ctx1.fillRect(0, 84, 44, 44);
ctx1.fillRect(120, 120, 44, 44);

ctx2.fillStyle = '#fff';
ctx2.fillRect(0, 44, 110, 110);
ctx2.fillRect(110, 0, 44, 44);
ctx2.fillRect(216, 25, 44, 44);
ctx2.fillRect(216-44, 70, 44, 44);
ctx2.fillRect(216, 154-44, 44, 44);

let partnerElement = document.getElementById('partnerElement')
let pe = partnerElement.getContext('2d');
let pi = Math.PI;

pe.lineWidth = 100
pe.strokeStyle = '#0f393a'
pe.arc(290, 300, 240, pi, true)
pe.stroke()
pe.clearRect(230, 10, 40, 40)
pe.clearRect(230-30, 35, 15, 15)
pe.clearRect(230-15, 50, 15, 15)
pe.clearRect(70, 260, 40, 40)
pe.clearRect(55, 260-15, 15, 15)
pe.clearRect(70, 260-30, 15, 15)

let choiceElement = document.getElementById('choiceElement')
let che = choiceElement.getContext('2d')

che.lineWidth = 100
che.strokeStyle = '#ebf3f4'
che.arc(290, 0, 240, pi / 2, true)
che.stroke()

let footerElement = document.getElementById('footerElement')
let fe = footerElement.getContext('2d')

fe.lineWidth = 100
fe.strokeStyle = '#e7ebeb'
fe.arc(70, 290, 240, pi / 2, true)
fe.stroke()
fe.clearRect(70, 0, 45, 35)
fe.clearRect(70 + 45, 35, 15, 15)
fe.clearRect(70 + 45 + 15, 20, 15, 15)

fe.clearRect(250 - 45, 200 - 35, 45, 35)
fe.clearRect(250, 165 - 15, 15, 15)
fe.clearRect(250 - 15, 165 - 30, 15, 15)
