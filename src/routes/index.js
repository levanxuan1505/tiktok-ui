import { HeaderOnly } from '~/components/Layout';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
// router có thể dùng free ko cần đăng nhập
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];
// router chỉ được dùng khi đăng nhập, mang tính bảo mật cao, khi onClick thì lái đến trang đăng nhập
const privateRoutes = [];
export { publicRoutes, privateRoutes };
