import Vue from 'vue'

import ActionSheet from "vant/lib/action-sheet";
import Badge from 'vant/lib/badge';
import Button from 'vant/lib/button';
import Col from 'vant/lib/col';
import Calendar from 'vant/lib/calendar';
import Card from 'vant/lib/card'
import Cell from 'vant/lib/cell';
import CellGroup from "vant/lib/cell-group";
import Checkbox from 'vant/lib/checkbox';
import Collapse from 'vant/lib/collapse';
import CollapseItem from 'vant/lib/collapse-item';
import CheckboxGroup from 'vant/lib/checkbox-group';
import DatetimePicker from 'vant/lib/datetime-picker';
import Dialog from 'vant/lib/dialog';
import Divider from 'vant/lib/divider';
import DropdownMenu from 'vant/lib/dropdown-menu';
import DropdownItem from 'vant/lib/dropdown-item';
import Empty from 'vant/lib/empty';
import Field from 'vant/lib/field';
import Form from "vant/lib/form";
import Grid from 'vant/lib/grid';
import GridItem from 'vant/lib/grid-item';
import Icon from 'vant/lib/icon';
import Image from 'vant/lib/image';
import ImagePreview from 'vant/lib/image-preview';
import List from 'vant/lib/list';
import Loading from 'vant/lib/loading';
import NavBar from 'vant/lib/nav-bar';
import NoticeBar from 'vant/lib/notice-bar';
import Pagination from 'vant/lib/pagination';
import Picker from 'vant/lib/picker';
import Popup from 'vant/lib/popup';
import Progress from 'vant/lib/progress';
import PullRefresh from 'vant/lib/pull-refresh';
import Rate from 'vant/lib/rate';
import Row from 'vant/lib/row';
import Radio from 'vant/lib/radio';
import RadioGroup from 'vant/lib/radio-group';
import Search from 'vant/lib/search';
import Sidebar from 'vant/lib/sidebar';
import SidebarItem from 'vant/lib/sidebar-item';
import Step from 'vant/lib/step';
import Steps from 'vant/lib/steps';
import Sticky from 'vant/lib/sticky';
import Swipe from 'vant/lib/swipe';
import SwipeItem from 'vant/lib/swipe-item';
import Switch from 'vant/lib/switch';
import Skeleton from 'vant/lib/skeleton';
import Tab from 'vant/lib/tab';
import Tabs from 'vant/lib/tabs';
import Tag from 'vant/lib/tag';
import Toast from 'vant/lib/toast';
import TreeSelect from 'vant/lib/tree-select';
import Uploader from 'vant/lib/uploader';

import 'vant/lib/action-sheet/style'
import 'vant/lib/badge/style';
import 'vant/lib/button/style';
import 'vant/lib/col/style';
import 'vant/lib/calendar/style';
import 'vant/lib/card/style'
import 'vant/lib/cell/style';
import 'vant/lib/cell-group/style'
import 'vant/lib/checkbox/style';
import 'vant/lib/collapse/style';
import 'vant/lib/collapse-item/style';
import 'vant/lib/checkbox-group/style';
import 'vant/lib/datetime-picker/style'
import 'vant/lib/dialog/style'
import 'vant/lib/divider/style';
import 'vant/lib/dropdown-menu/style';
import 'vant/lib/dropdown-item/style';
import 'vant/lib/empty/style';
import 'vant/lib/field/style';
import 'vant/lib/form/style';
import 'vant/lib/grid/style';
import 'vant/lib/grid-item/style';
import 'vant/lib/icon/style';
import 'vant/lib/image/style';
import 'vant/lib/image-preview/style';
import 'vant/lib/list/style';
import 'vant/lib/loading/style';
import 'vant/lib/nav-bar/style';
import 'vant/lib/notice-bar/style';
import 'vant/lib/pagination/style';
import 'vant/lib/picker/style';
import 'vant/lib/popup/style';
import 'vant/lib/progress/style';
import 'vant/lib/pull-refresh/style';
import 'vant/lib/rate/style';
import 'vant/lib/row/style';
import 'vant/lib/radio/style';
import 'vant/lib/radio-group/style';
import 'vant/lib/search/style';
import 'vant/lib/sidebar/style';
import 'vant/lib/sidebar-item/style';
import 'vant/lib/step/style';
import 'vant/lib/steps/style';
import 'vant/lib/sticky/style';
import 'vant/lib/swipe/style';
import 'vant/lib/swipe-item/style';
import 'vant/lib/switch/style';
import 'vant/lib/skeleton/style';
import 'vant/lib/tab/style';
import 'vant/lib/tabs/style'
import 'vant/lib/tag/style'
import 'vant/lib/toast/style';
import 'vant/lib/tree-select/style';
import 'vant/lib/uploader/style';

import 'vant/lib/dropdown-menu/style/less';
import 'vant/lib/dropdown-item/style/less';

const components = [
  ActionSheet,
  Badge,
  Button,
  Col,
  Calendar,
  Card,
  Cell,
  CellGroup,
  Checkbox,
  Collapse,
  CollapseItem,
  CheckboxGroup,
  DatetimePicker,
  Divider,
  DropdownMenu,
  DropdownItem,
  Empty,
  Field,
  Form,
  Grid,
  GridItem,
  Icon,
  Loading,
  Image,
  ImagePreview,
  List,
  NavBar,
  NoticeBar,
  Pagination,
  Picker,
  Popup,
  Progress,
  PullRefresh,
  Rate,
  Row,
  Radio,
  RadioGroup,
  Search,
  Sticky,
  Sidebar,
  SidebarItem,
  Step,
  Steps,
  Swipe,
  SwipeItem,
  Switch,
  Tab,
  Tabs,
  Tag,
  Toast,
  TreeSelect,
  Uploader
];

Vue.use(Dialog);
Vue.use(Skeleton);

export default {
  install(Vue) {
    components.forEach(item => {
      Vue.component(item.name, item)
    })
  }
}
