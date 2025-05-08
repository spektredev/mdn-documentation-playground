function a() {
  console.log("a");
  b();
}
function b() {
  console.log("b");
}
a();
/*
  Простая задача, но может запутать, своей простотой.
  Расписать в каком порядке попадают задачи в call stack.
*/