import React, { Component } from 'react';
import { StyleSheet, ToastAndroid , Text, View , Button ,Image , ScrollView, Dimensions , 
  SafeAreaView,
  TouchableOpacity,
  FlatList } from 'react-native';

import { Platform } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';
import { Input } from 'react-native-elements';
import Prodcut_Hortizontal from './components/explore/Prodcut_Hortizontal'
import { SliderBox } from 'react-native-image-slider-box';
import Slideshow from 'react-native-image-slider-show';



//import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
//import { Carousel } from 'react-responsive-carousel';
//import Carousel from "react-multi-carousel";
//import 'react-multi-carousel/lib/styles.css';


//import AliceCarousel from 'react-alice-carousel'
//import 'react-alice-carousel/lib/alice-carousel.css'

const { width: screenWidth } = Dimensions.get('window')

//import TabBarIcon from '../components/TabBarIcon';

import ProductList from '../alnoor/screens/productsList';
import SingleProduct from '../alnoor/screens/singleProduct';
import Cart from '../alnoor/screens/cart';
import Checkout from '../alnoor/screens/checkout';
import Location from '../alnoor/screens/location';
//import Header from '../alnoor/screens/header';

import { CartContext } from '../alnoor/context/CartContext';


class App extends Component {


  state = {
    items: [],
    
  };


  onAddItem = (item) => {

    this.setState(state => {
      var exists = false;
      const newState = state.items.map(currentItem => {
        if (currentItem.id === item.id) {
          exists = true;
          return {
            ...currentItem,
            quantity: currentItem.quantity + item.quantity
          }
        } else {
          return currentItem
        }
      });
      if(exists) {
        return {
          items: newState
        }
      } else {
        return {
          items: [
            ...state.items,
            item
          ]
        }
      }
    });

    ToastAndroid.show(`${item.name} added to cart`, ToastAndroid.SHORT);
  }
  
  onRemoveItem = (item) => {
    this.setState(state => {
      const remainingItems = [
        ...state.items.filter(i => i.id !== item.id)
      ]
      return {
        items: remainingItems
      }
    });
  }

  render() {
    return (<CartContext.Provider
    value={{
      items: this.state.items,
      addItem: this.onAddItem,
      removeItem: this.onRemoveItem,
    }}
  >
      <AppContainer />
  </CartContext.Provider>);
  }
}
export default App;



class DashboardScreen extends Component {

  constructor(props) {
    super(props);
    

    this.state = {
      position: 1,
      products: [{
        "id": 15833,
        "name": "GARNIER FACEWASH LEMON",
        "slug": "grnir-fw-lem",
        "permalink": "https:\/\/alnoorgrocers.com\/product\/grnir-fw-lem\/",
        "date_created": "2019-12-05T19:39:39",
        "date_created_gmt": "2019-12-05T19:39:39",
        "date_modified": "2019-12-27T07:15:52",
        "date_modified_gmt": "2019-12-27T07:15:52",
        "type": "simple",
        "status": "publish",
        "featured": false,
        "catalog_visibility": "visible",
        "description": "",
        "short_description": "",
        "sku": "",
        "price": "299.00",
        "regular_price": "299.00",
        "sale_price": "",
        "date_on_sale_from": null,
        "date_on_sale_from_gmt": null,
        "date_on_sale_to": null,
        "date_on_sale_to_gmt": null,
        "price_html": "<span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">&#8360;<\/span>299.00<\/span>",
        "on_sale": false,
        "purchasable": true,
        "total_sales": 0,
        "virtual": false,
        "downloadable": false,
        "downloads": [],
        "download_limit": -1,
        "download_expiry": -1,
        "external_url": "",
        "button_text": "",
        "tax_status": "taxable",
        "tax_class": "",
        "manage_stock": false,
        "stock_quantity": null,
        "in_stock": true,
        "backorders": "no",
        "backorders_allowed": false,
        "backordered": false,
        "sold_individually": false,
        "weight": "",
        "dimensions": {
          "length": "",
          "width": "",
          "height": ""
        },
        "shipping_required": true,
        "shipping_taxable": true,
        "shipping_class": "",
        "shipping_class_id": 0,
        "reviews_allowed": true,
        "average_rating": "0.00",
        "rating_count": 0,
        "related_ids": [13426, 13427, 13218, 13010, 13343],
        "upsell_ids": [],
        "cross_sell_ids": [],
        "parent_id": 0,
        "purchase_note": "",
        "categories": [{
          "id": 43,
          "name": "PERSONAL CARE",
          "slug": "beauty-cosmetics"
        }],
        "tags": [],
        "images": [{
          "id": 15880,
          "date_created": "2019-12-09T09:50:08",
          "date_created_gmt": "2019-12-09T09:50:08",
          "date_modified": "2019-12-09T09:50:08",
          "date_modified_gmt": "2019-12-09T09:50:08",
          "src": "https:\/\/alnoorgrocers.com\/wp-content\/uploads\/2019\/12\/2-Garnier-FW-Lemon.jpg",
          "name": "2-Garnier FW Lemon",
          "alt": "",
          "position": 0
        }],
        "attributes": [],
        "default_attributes": [],
        "variations": [],
        "grouped_products": [],
        "menu_order": 0,
        "meta_data": [{
          "id": 267412,
          "key": "pyre_main_top_padding",
          "value": ""
        }, {
          "id": 267413,
          "key": "pyre_main_bottom_padding",
          "value": ""
        }, {
          "id": 267414,
          "key": "pyre_portfolio_width_100",
          "value": "default"
        }, {
          "id": 267415,
          "key": "pyre_hundredp_padding",
          "value": ""
        }, {
          "id": 267416,
          "key": "pyre_display_header",
          "value": "yes"
        }, {
          "id": 267417,
          "key": "pyre_header_100_width",
          "value": "default"
        }, {
          "id": 267418,
          "key": "pyre_combined_header_bg_color",
          "value": ""
        }, {
          "id": 267419,
          "key": "pyre_mobile_header_bg_color",
          "value": ""
        }, {
          "id": 267420,
          "key": "pyre_header_bg",
          "value": ""
        }, {
          "id": 267421,
          "key": "pyre_header_bg_id",
          "value": ""
        }, {
          "id": 267422,
          "key": "pyre_header_bg_full",
          "value": "no"
        }, {
          "id": 267423,
          "key": "pyre_header_bg_repeat",
          "value": "repeat"
        }, {
          "id": 267424,
          "key": "pyre_displayed_menu",
          "value": "default"
        }, {
          "id": 267425,
          "key": "pyre_display_footer",
          "value": "default"
        }, {
          "id": 267426,
          "key": "pyre_display_copyright",
          "value": "default"
        }, {
          "id": 267427,
          "key": "pyre_footer_100_width",
          "value": "default"
        }, {
          "id": 267428,
          "key": "pyre_sidebar_position",
          "value": "default"
        }, {
          "id": 267429,
          "key": "pyre_responsive_sidebar_order",
          "value": ""
        }, {
          "id": 267430,
          "key": "pyre_sidebar_sticky",
          "value": "default"
        }, {
          "id": 267431,
          "key": "pyre_sidebar_bg_color",
          "value": ""
        }, {
          "id": 267432,
          "key": "pyre_slider_type",
          "value": "no"
        }, {
          "id": 267433,
          "key": "pyre_wooslider",
          "value": "0"
        }, {
          "id": 267434,
          "key": "pyre_elasticslider",
          "value": "0"
        }, {
          "id": 267435,
          "key": "pyre_slider_position",
          "value": "default"
        }, {
          "id": 267436,
          "key": "pyre_avada_rev_styles",
          "value": "default"
        }, {
          "id": 267437,
          "key": "pyre_fallback",
          "value": ""
        }, {
          "id": 267438,
          "key": "pyre_fallback_id",
          "value": ""
        }, {
          "id": 267439,
          "key": "pyre_demo_slider",
          "value": ""
        }, {
          "id": 267440,
          "key": "pyre_page_bg_layout",
          "value": "default"
        }, {
          "id": 267441,
          "key": "pyre_page_bg_color",
          "value": ""
        }, {
          "id": 267442,
          "key": "pyre_page_bg",
          "value": ""
        }, {
          "id": 267443,
          "key": "pyre_page_bg_id",
          "value": ""
        }, {
          "id": 267444,
          "key": "pyre_page_bg_full",
          "value": "no"
        }, {
          "id": 267445,
          "key": "pyre_page_bg_repeat",
          "value": "default"
        }, {
          "id": 267446,
          "key": "pyre_wide_page_bg_color",
          "value": ""
        }, {
          "id": 267447,
          "key": "pyre_wide_page_bg",
          "value": ""
        }, {
          "id": 267448,
          "key": "pyre_wide_page_bg_id",
          "value": ""
        }, {
          "id": 267449,
          "key": "pyre_wide_page_bg_full",
          "value": "no"
        }, {
          "id": 267450,
          "key": "pyre_wide_page_bg_repeat",
          "value": "default"
        }, {
          "id": 267451,
          "key": "pyre_page_title",
          "value": "default"
        }, {
          "id": 267452,
          "key": "pyre_page_title_breadcrumbs_search_bar",
          "value": "default"
        }, {
          "id": 267453,
          "key": "pyre_page_title_text",
          "value": "default"
        }, {
          "id": 267454,
          "key": "pyre_page_title_text_alignment",
          "value": "default"
        }, {
          "id": 267455,
          "key": "pyre_page_title_custom_text",
          "value": ""
        }, {
          "id": 267456,
          "key": "pyre_page_title_text_size",
          "value": ""
        }, {
          "id": 267457,
          "key": "pyre_page_title_font_color",
          "value": ""
        }, {
          "id": 267458,
          "key": "pyre_page_title_line_height",
          "value": ""
        }, {
          "id": 267459,
          "key": "pyre_page_title_custom_subheader",
          "value": ""
        }, {
          "id": 267460,
          "key": "pyre_page_title_custom_subheader_text_size",
          "value": ""
        }, {
          "id": 267461,
          "key": "pyre_page_title_subheader_font_color",
          "value": ""
        }, {
          "id": 267462,
          "key": "pyre_page_title_100_width",
          "value": "default"
        }, {
          "id": 267463,
          "key": "pyre_page_title_height",
          "value": ""
        }, {
          "id": 267464,
          "key": "pyre_page_title_mobile_height",
          "value": ""
        }, {
          "id": 267465,
          "key": "pyre_page_title_bar_bg_color",
          "value": ""
        }, {
          "id": 267466,
          "key": "pyre_page_title_bar_borders_color",
          "value": ""
        }, {
          "id": 267467,
          "key": "pyre_page_title_bar_bg",
          "value": ""
        }, {
          "id": 267468,
          "key": "pyre_page_title_bar_bg_id",
          "value": ""
        }, {
          "id": 267469,
          "key": "pyre_page_title_bar_bg_retina",
          "value": ""
        }, {
          "id": 267470,
          "key": "pyre_page_title_bar_bg_retina_id",
          "value": ""
        }, {
          "id": 267471,
          "key": "pyre_page_title_bar_bg_full",
          "value": "default"
        }, {
          "id": 267472,
          "key": "pyre_page_title_bg_parallax",
          "value": "default"
        }, {
          "id": 422675,
          "key": "sbg_selected_sidebar",
          "value": ["0"]
        }, {
          "id": 422676,
          "key": "sbg_selected_sidebar_replacement",
          "value": ["default_sidebar"]
        }, {
          "id": 422677,
          "key": "sbg_selected_sidebar_2",
          "value": ["0"]
        }, {
          "id": 422678,
          "key": "sbg_selected_sidebar_2_replacement",
          "value": ["default_sidebar"]
        }],
        "_links": {
          "self": [{
            "href": "https:\/\/alnoorgrocers.com\/wp-json\/wc\/v2\/products\/15833"
          }],
          "collection": [{
            "href": "https:\/\/alnoorgrocers.com\/wp-json\/wc\/v2\/products"
          }]
        }
      }, {
        "id": 15832,
        "name": "GOLDEN PEARL SOAP",
        "slug": "gold-pearl-soap-2",
        "permalink": "https:\/\/alnoorgrocers.com\/product\/gold-pearl-soap-2\/",
        "date_created": "2019-12-05T19:39:39",
        "date_created_gmt": "2019-12-05T19:39:39",
        "date_modified": "2019-12-27T07:14:54",
        "date_modified_gmt": "2019-12-27T07:14:54",
        "type": "simple",
        "status": "publish",
        "featured": false,
        "catalog_visibility": "visible",
        "description": "",
        "short_description": "",
        "sku": "",
        "price": "50.00",
        "regular_price": "50.00",
        "sale_price": "",
        "date_on_sale_from": null,
        "date_on_sale_from_gmt": null,
        "date_on_sale_to": null,
        "date_on_sale_to_gmt": null,
        "price_html": "<span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">&#8360;<\/span>50.00<\/span>",
        "on_sale": false,
        "purchasable": true,
        "total_sales": 0,
        "virtual": false,
        "downloadable": false,
        "downloads": [],
        "download_limit": -1,
        "download_expiry": -1,
        "external_url": "",
        "button_text": "",
        "tax_status": "taxable",
        "tax_class": "",
        "manage_stock": false,
        "stock_quantity": null,
        "in_stock": true,
        "backorders": "no",
        "backorders_allowed": false,
        "backordered": false,
        "sold_individually": false,
        "weight": "",
        "dimensions": {
          "length": "",
          "width": "",
          "height": ""
        },
        "shipping_required": true,
        "shipping_taxable": true,
        "shipping_class": "",
        "shipping_class_id": 0,
        "reviews_allowed": true,
        "average_rating": "0.00",
        "rating_count": 0,
        "related_ids": [13436, 13345, 13010, 13218, 13237],
        "upsell_ids": [],
        "cross_sell_ids": [],
        "parent_id": 0,
        "purchase_note": "",
        "categories": [{
          "id": 43,
          "name": "PERSONAL CARE",
          "slug": "beauty-cosmetics"
        }],
        "tags": [],
        "images": [{
          "id": 15847,
          "date_created": "2019-12-06T10:36:45",
          "date_created_gmt": "2019-12-06T10:36:45",
          "date_modified": "2019-12-06T10:36:45",
          "date_modified_gmt": "2019-12-06T10:36:45",
          "src": "https:\/\/alnoorgrocers.com\/wp-content\/uploads\/2019\/12\/Golden-Pearl.jpg",
          "name": "Golden Pearl",
          "alt": "",
          "position": 0
        }],
        "attributes": [],
        "default_attributes": [],
        "variations": [],
        "grouped_products": [],
        "menu_order": 0,
        "meta_data": [{
          "id": 267292,
          "key": "pyre_main_top_padding",
          "value": ""
        }, {
          "id": 267293,
          "key": "pyre_main_bottom_padding",
          "value": ""
        }, {
          "id": 267294,
          "key": "pyre_portfolio_width_100",
          "value": "default"
        }, {
          "id": 267295,
          "key": "pyre_hundredp_padding",
          "value": ""
        }, {
          "id": 267296,
          "key": "pyre_display_header",
          "value": "yes"
        }, {
          "id": 267297,
          "key": "pyre_header_100_width",
          "value": "default"
        }, {
          "id": 267298,
          "key": "pyre_combined_header_bg_color",
          "value": ""
        }, {
          "id": 267299,
          "key": "pyre_mobile_header_bg_color",
          "value": ""
        }, {
          "id": 267300,
          "key": "pyre_header_bg",
          "value": ""
        }, {
          "id": 267301,
          "key": "pyre_header_bg_id",
          "value": ""
        }, {
          "id": 267302,
          "key": "pyre_header_bg_full",
          "value": "no"
        }, {
          "id": 267303,
          "key": "pyre_header_bg_repeat",
          "value": "repeat"
        }, {
          "id": 267304,
          "key": "pyre_displayed_menu",
          "value": "default"
        }, {
          "id": 267305,
          "key": "pyre_display_footer",
          "value": "default"
        }, {
          "id": 267306,
          "key": "pyre_display_copyright",
          "value": "default"
        }, {
          "id": 267307,
          "key": "pyre_footer_100_width",
          "value": "default"
        }, {
          "id": 267308,
          "key": "pyre_sidebar_position",
          "value": "default"
        }, {
          "id": 267309,
          "key": "pyre_responsive_sidebar_order",
          "value": ""
        }, {
          "id": 267310,
          "key": "pyre_sidebar_sticky",
          "value": "default"
        }, {
          "id": 267311,
          "key": "pyre_sidebar_bg_color",
          "value": ""
        }, {
          "id": 267312,
          "key": "pyre_slider_type",
          "value": "no"
        }, {
          "id": 267313,
          "key": "pyre_wooslider",
          "value": "0"
        }, {
          "id": 267314,
          "key": "pyre_elasticslider",
          "value": "0"
        }, {
          "id": 267315,
          "key": "pyre_slider_position",
          "value": "default"
        }, {
          "id": 267316,
          "key": "pyre_avada_rev_styles",
          "value": "default"
        }, {
          "id": 267317,
          "key": "pyre_fallback",
          "value": ""
        }, {
          "id": 267318,
          "key": "pyre_fallback_id",
          "value": ""
        }, {
          "id": 267319,
          "key": "pyre_demo_slider",
          "value": ""
        }, {
          "id": 267320,
          "key": "pyre_page_bg_layout",
          "value": "default"
        }, {
          "id": 267321,
          "key": "pyre_page_bg_color",
          "value": ""
        }, {
          "id": 267322,
          "key": "pyre_page_bg",
          "value": ""
        }, {
          "id": 267323,
          "key": "pyre_page_bg_id",
          "value": ""
        }, {
          "id": 267324,
          "key": "pyre_page_bg_full",
          "value": "no"
        }, {
          "id": 267325,
          "key": "pyre_page_bg_repeat",
          "value": "default"
        }, {
          "id": 267326,
          "key": "pyre_wide_page_bg_color",
          "value": ""
        }, {
          "id": 267327,
          "key": "pyre_wide_page_bg",
          "value": ""
        }, {
          "id": 267328,
          "key": "pyre_wide_page_bg_id",
          "value": ""
        }, {
          "id": 267329,
          "key": "pyre_wide_page_bg_full",
          "value": "no"
        }, {
          "id": 267330,
          "key": "pyre_wide_page_bg_repeat",
          "value": "default"
        }, {
          "id": 267331,
          "key": "pyre_page_title",
          "value": "default"
        }, {
          "id": 267332,
          "key": "pyre_page_title_breadcrumbs_search_bar",
          "value": "default"
        }, {
          "id": 267333,
          "key": "pyre_page_title_text",
          "value": "default"
        }, {
          "id": 267334,
          "key": "pyre_page_title_text_alignment",
          "value": "default"
        }, {
          "id": 267335,
          "key": "pyre_page_title_custom_text",
          "value": ""
        }, {
          "id": 267336,
          "key": "pyre_page_title_text_size",
          "value": ""
        }, {
          "id": 267337,
          "key": "pyre_page_title_font_color",
          "value": ""
        }, {
          "id": 267338,
          "key": "pyre_page_title_line_height",
          "value": ""
        }, {
          "id": 267339,
          "key": "pyre_page_title_custom_subheader",
          "value": ""
        }, {
          "id": 267340,
          "key": "pyre_page_title_custom_subheader_text_size",
          "value": ""
        }, {
          "id": 267341,
          "key": "pyre_page_title_subheader_font_color",
          "value": ""
        }, {
          "id": 267342,
          "key": "pyre_page_title_100_width",
          "value": "default"
        }, {
          "id": 267343,
          "key": "pyre_page_title_height",
          "value": ""
        }, {
          "id": 267344,
          "key": "pyre_page_title_mobile_height",
          "value": ""
        }, {
          "id": 267345,
          "key": "pyre_page_title_bar_bg_color",
          "value": ""
        }, {
          "id": 267346,
          "key": "pyre_page_title_bar_borders_color",
          "value": ""
        }, {
          "id": 267347,
          "key": "pyre_page_title_bar_bg",
          "value": ""
        }, {
          "id": 267348,
          "key": "pyre_page_title_bar_bg_id",
          "value": ""
        }, {
          "id": 267349,
          "key": "pyre_page_title_bar_bg_retina",
          "value": ""
        }, {
          "id": 267350,
          "key": "pyre_page_title_bar_bg_retina_id",
          "value": ""
        }, {
          "id": 267351,
          "key": "pyre_page_title_bar_bg_full",
          "value": "default"
        }, {
          "id": 267352,
          "key": "pyre_page_title_bg_parallax",
          "value": "default"
        }, {
          "id": 422666,
          "key": "sbg_selected_sidebar",
          "value": ["0"]
        }, {
          "id": 422667,
          "key": "sbg_selected_sidebar_replacement",
          "value": ["default_sidebar"]
        }, {
          "id": 422668,
          "key": "sbg_selected_sidebar_2",
          "value": ["0"]
        }, {
          "id": 422669,
          "key": "sbg_selected_sidebar_2_replacement",
          "value": ["default_sidebar"]
        }],
        "_links": {
          "self": [{
            "href": "https:\/\/alnoorgrocers.com\/wp-json\/wc\/v2\/products\/15832"
          }],
          "collection": [{
            "href": "https:\/\/alnoorgrocers.com\/wp-json\/wc\/v2\/products"
          }]
        }
      }, {
        "id": 15831,
        "name": "GOLDEN PEARL SOAP",
        "slug": "gold-pearl-soap",
        "permalink": "https:\/\/alnoorgrocers.com\/product\/gold-pearl-soap\/",
        "date_created": "2019-12-05T19:39:38",
        "date_created_gmt": "2019-12-05T19:39:38",
        "date_modified": "2019-12-27T07:21:59",
        "date_modified_gmt": "2019-12-27T07:21:59",
        "type": "simple",
        "status": "publish",
        "featured": false,
        "catalog_visibility": "visible",
        "description": "",
        "short_description": "",
        "sku": "",
        "price": "50.00",
        "regular_price": "50.00",
        "sale_price": "",
        "date_on_sale_from": null,
        "date_on_sale_from_gmt": null,
        "date_on_sale_to": null,
        "date_on_sale_to_gmt": null,
        "price_html": "<span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">&#8360;<\/span>50.00<\/span>",
        "on_sale": false,
        "purchasable": true,
        "total_sales": 0,
        "virtual": false,
        "downloadable": false,
        "downloads": [],
        "download_limit": -1,
        "download_expiry": -1,
        "external_url": "",
        "button_text": "",
        "tax_status": "taxable",
        "tax_class": "",
        "manage_stock": false,
        "stock_quantity": null,
        "in_stock": true,
        "backorders": "no",
        "backorders_allowed": false,
        "backordered": false,
        "sold_individually": false,
        "weight": "",
        "dimensions": {
          "length": "",
          "width": "",
          "height": ""
        },
        "shipping_required": true,
        "shipping_taxable": true,
        "shipping_class": "",
        "shipping_class_id": 0,
        "reviews_allowed": true,
        "average_rating": "0.00",
        "rating_count": 0,
        "related_ids": [13012, 13343, 13235, 13011, 13238],
        "upsell_ids": [],
        "cross_sell_ids": [],
        "parent_id": 0,
        "purchase_note": "",
        "categories": [{
          "id": 43,
          "name": "PERSONAL CARE",
          "slug": "beauty-cosmetics"
        }],
        "tags": [],
        "images": [{
          "id": 15847,
          "date_created": "2019-12-06T10:36:45",
          "date_created_gmt": "2019-12-06T10:36:45",
          "date_modified": "2019-12-06T10:36:45",
          "date_modified_gmt": "2019-12-06T10:36:45",
          "src": "https:\/\/alnoorgrocers.com\/wp-content\/uploads\/2019\/12\/Golden-Pearl.jpg",
          "name": "Golden Pearl",
          "alt": "",
          "position": 0
        }],
        "attributes": [],
        "default_attributes": [],
        "variations": [],
        "grouped_products": [],
        "menu_order": 0,
        "meta_data": [{
          "id": 267599,
          "key": "pyre_main_top_padding",
          "value": ""
        }, {
          "id": 267600,
          "key": "pyre_main_bottom_padding",
          "value": ""
        }, {
          "id": 267601,
          "key": "pyre_portfolio_width_100",
          "value": "default"
        }, {
          "id": 267602,
          "key": "pyre_hundredp_padding",
          "value": ""
        }, {
          "id": 267603,
          "key": "pyre_display_header",
          "value": "yes"
        }, {
          "id": 267604,
          "key": "pyre_header_100_width",
          "value": "default"
        }, {
          "id": 267605,
          "key": "pyre_combined_header_bg_color",
          "value": ""
        }, {
          "id": 267606,
          "key": "pyre_mobile_header_bg_color",
          "value": ""
        }, {
          "id": 267607,
          "key": "pyre_header_bg",
          "value": ""
        }, {
          "id": 267608,
          "key": "pyre_header_bg_id",
          "value": ""
        }, {
          "id": 267609,
          "key": "pyre_header_bg_full",
          "value": "no"
        }, {
          "id": 267610,
          "key": "pyre_header_bg_repeat",
          "value": "repeat"
        }, {
          "id": 267611,
          "key": "pyre_displayed_menu",
          "value": "default"
        }, {
          "id": 267612,
          "key": "pyre_display_footer",
          "value": "default"
        }, {
          "id": 267613,
          "key": "pyre_display_copyright",
          "value": "default"
        }, {
          "id": 267614,
          "key": "pyre_footer_100_width",
          "value": "default"
        }, {
          "id": 267615,
          "key": "pyre_sidebar_position",
          "value": "default"
        }, {
          "id": 267616,
          "key": "pyre_responsive_sidebar_order",
          "value": ""
        }, {
          "id": 267617,
          "key": "pyre_sidebar_sticky",
          "value": "default"
        }, {
          "id": 267618,
          "key": "pyre_sidebar_bg_color",
          "value": ""
        }, {
          "id": 267619,
          "key": "pyre_slider_type",
          "value": "no"
        }, {
          "id": 267620,
          "key": "pyre_wooslider",
          "value": "0"
        }, {
          "id": 267621,
          "key": "pyre_elasticslider",
          "value": "0"
        }, {
          "id": 267622,
          "key": "pyre_slider_position",
          "value": "default"
        }, {
          "id": 267623,
          "key": "pyre_avada_rev_styles",
          "value": "default"
        }, {
          "id": 267624,
          "key": "pyre_fallback",
          "value": ""
        }, {
          "id": 267625,
          "key": "pyre_fallback_id",
          "value": ""
        }, {
          "id": 267626,
          "key": "pyre_demo_slider",
          "value": ""
        }, {
          "id": 267627,
          "key": "pyre_page_bg_layout",
          "value": "default"
        }, {
          "id": 267628,
          "key": "pyre_page_bg_color",
          "value": ""
        }, {
          "id": 267629,
          "key": "pyre_page_bg",
          "value": ""
        }, {
          "id": 267630,
          "key": "pyre_page_bg_id",
          "value": ""
        }, {
          "id": 267631,
          "key": "pyre_page_bg_full",
          "value": "no"
        }, {
          "id": 267632,
          "key": "pyre_page_bg_repeat",
          "value": "default"
        }, {
          "id": 267633,
          "key": "pyre_wide_page_bg_color",
          "value": ""
        }, {
          "id": 267634,
          "key": "pyre_wide_page_bg",
          "value": ""
        }, {
          "id": 267635,
          "key": "pyre_wide_page_bg_id",
          "value": ""
        }, {
          "id": 267636,
          "key": "pyre_wide_page_bg_full",
          "value": "no"
        }, {
          "id": 267637,
          "key": "pyre_wide_page_bg_repeat",
          "value": "default"
        }, {
          "id": 267638,
          "key": "pyre_page_title",
          "value": "default"
        }, {
          "id": 267639,
          "key": "pyre_page_title_breadcrumbs_search_bar",
          "value": "default"
        }, {
          "id": 267640,
          "key": "pyre_page_title_text",
          "value": "default"
        }, {
          "id": 267641,
          "key": "pyre_page_title_text_alignment",
          "value": "default"
        }, {
          "id": 267642,
          "key": "pyre_page_title_custom_text",
          "value": ""
        }, {
          "id": 267643,
          "key": "pyre_page_title_text_size",
          "value": ""
        }, {
          "id": 267644,
          "key": "pyre_page_title_font_color",
          "value": ""
        }, {
          "id": 267645,
          "key": "pyre_page_title_line_height",
          "value": ""
        }, {
          "id": 267646,
          "key": "pyre_page_title_custom_subheader",
          "value": ""
        }, {
          "id": 267647,
          "key": "pyre_page_title_custom_subheader_text_size",
          "value": ""
        }, {
          "id": 267648,
          "key": "pyre_page_title_subheader_font_color",
          "value": ""
        }, {
          "id": 267649,
          "key": "pyre_page_title_100_width",
          "value": "default"
        }, {
          "id": 267650,
          "key": "pyre_page_title_height",
          "value": ""
        }, {
          "id": 267651,
          "key": "pyre_page_title_mobile_height",
          "value": ""
        }, {
          "id": 267652,
          "key": "pyre_page_title_bar_bg_color",
          "value": ""
        }, {
          "id": 267653,
          "key": "pyre_page_title_bar_borders_color",
          "value": ""
        }, {
          "id": 267654,
          "key": "pyre_page_title_bar_bg",
          "value": ""
        }, {
          "id": 267655,
          "key": "pyre_page_title_bar_bg_id",
          "value": ""
        }, {
          "id": 267656,
          "key": "pyre_page_title_bar_bg_retina",
          "value": ""
        }, {
          "id": 267657,
          "key": "pyre_page_title_bar_bg_retina_id",
          "value": ""
        }, {
          "id": 267658,
          "key": "pyre_page_title_bar_bg_full",
          "value": "default"
        }, {
          "id": 267659,
          "key": "pyre_page_title_bg_parallax",
          "value": "default"
        }, {
          "id": 422897,
          "key": "sbg_selected_sidebar",
          "value": ["0"]
        }, {
          "id": 422898,
          "key": "sbg_selected_sidebar_replacement",
          "value": ["default_sidebar"]
        }, {
          "id": 422899,
          "key": "sbg_selected_sidebar_2",
          "value": ["0"]
        }, {
          "id": 422900,
          "key": "sbg_selected_sidebar_2_replacement",
          "value": ["default_sidebar"]
        }],
        "_links": {
          "self": [{
            "href": "https:\/\/alnoorgrocers.com\/wp-json\/wc\/v2\/products\/15831"
          }],
          "collection": [{
            "href": "https:\/\/alnoorgrocers.com\/wp-json\/wc\/v2\/products"
          }]
        }
      }, {
        "id": 15830,
        "name": "STILLMANS RED",
        "slug": "stillmans-red",
        "permalink": "https:\/\/alnoorgrocers.com\/product\/stillmans-red\/",
        "date_created": "2019-12-05T19:39:38",
        "date_created_gmt": "2019-12-05T19:39:38",
        "date_modified": "2019-12-27T07:17:39",
        "date_modified_gmt": "2019-12-27T07:17:39",
        "type": "simple",
        "status": "publish",
        "featured": false,
        "catalog_visibility": "visible",
        "description": "",
        "short_description": "",
        "sku": "",
        "price": "250.00",
        "regular_price": "250.00",
        "sale_price": "",
        "date_on_sale_from": null,
        "date_on_sale_from_gmt": null,
        "date_on_sale_to": null,
        "date_on_sale_to_gmt": null,
        "price_html": "<span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">&#8360;<\/span>250.00<\/span>",
        "on_sale": false,
        "purchasable": true,
        "total_sales": 0,
        "virtual": false,
        "downloadable": false,
        "downloads": [],
        "download_limit": -1,
        "download_expiry": -1,
        "external_url": "",
        "button_text": "",
        "tax_status": "taxable",
        "tax_class": "",
        "manage_stock": false,
        "stock_quantity": null,
        "in_stock": true,
        "backorders": "no",
        "backorders_allowed": false,
        "backordered": false,
        "sold_individually": false,
        "weight": "",
        "dimensions": {
          "length": "",
          "width": "",
          "height": ""
        },
        "shipping_required": true,
        "shipping_taxable": true,
        "shipping_class": "",
        "shipping_class_id": 0,
        "reviews_allowed": true,
        "average_rating": "0.00",
        "rating_count": 0,
        "related_ids": [13470, 13342, 13012, 13238, 13237],
        "upsell_ids": [],
        "cross_sell_ids": [],
        "parent_id": 0,
        "purchase_note": "",
        "categories": [{
          "id": 43,
          "name": "PERSONAL CARE",
          "slug": "beauty-cosmetics"
        }],
        "tags": [],
        "images": [{
          "id": 16016,
          "date_created": "2019-12-11T11:44:03",
          "date_created_gmt": "2019-12-11T11:44:03",
          "date_modified": "2019-12-11T11:44:03",
          "date_modified_gmt": "2019-12-11T11:44:03",
          "src": "https:\/\/alnoorgrocers.com\/wp-content\/uploads\/2019\/12\/STILLMANS-RED.jpg",
          "name": "STILLMANS RED",
          "alt": "",
          "position": 0
        }],
        "attributes": [],
        "default_attributes": [],
        "variations": [],
        "grouped_products": [],
        "menu_order": 0,
        "meta_data": [{
          "id": 272672,
          "key": "pyre_main_top_padding",
          "value": ""
        }, {
          "id": 272673,
          "key": "pyre_main_bottom_padding",
          "value": ""
        }, {
          "id": 272674,
          "key": "pyre_portfolio_width_100",
          "value": "default"
        }, {
          "id": 272675,
          "key": "pyre_hundredp_padding",
          "value": ""
        }, {
          "id": 272676,
          "key": "pyre_display_header",
          "value": "yes"
        }, {
          "id": 272677,
          "key": "pyre_header_100_width",
          "value": "default"
        }, {
          "id": 272678,
          "key": "pyre_combined_header_bg_color",
          "value": ""
        }, {
          "id": 272679,
          "key": "pyre_mobile_header_bg_color",
          "value": ""
        }, {
          "id": 272680,
          "key": "pyre_header_bg",
          "value": ""
        }, {
          "id": 272681,
          "key": "pyre_header_bg_id",
          "value": ""
        }, {
          "id": 272682,
          "key": "pyre_header_bg_full",
          "value": "no"
        }, {
          "id": 272683,
          "key": "pyre_header_bg_repeat",
          "value": "repeat"
        }, {
          "id": 272684,
          "key": "pyre_displayed_menu",
          "value": "default"
        }, {
          "id": 272685,
          "key": "pyre_display_footer",
          "value": "default"
        }, {
          "id": 272686,
          "key": "pyre_display_copyright",
          "value": "default"
        }, {
          "id": 272687,
          "key": "pyre_footer_100_width",
          "value": "default"
        }, {
          "id": 272688,
          "key": "pyre_sidebar_position",
          "value": "default"
        }, {
          "id": 272689,
          "key": "pyre_responsive_sidebar_order",
          "value": ""
        }, {
          "id": 272690,
          "key": "pyre_sidebar_sticky",
          "value": "default"
        }, {
          "id": 272691,
          "key": "pyre_sidebar_bg_color",
          "value": ""
        }, {
          "id": 272692,
          "key": "pyre_slider_type",
          "value": "no"
        }, {
          "id": 272693,
          "key": "pyre_wooslider",
          "value": "0"
        }, {
          "id": 272694,
          "key": "pyre_elasticslider",
          "value": "0"
        }, {
          "id": 272695,
          "key": "pyre_slider_position",
          "value": "default"
        }, {
          "id": 272696,
          "key": "pyre_avada_rev_styles",
          "value": "default"
        }, {
          "id": 272697,
          "key": "pyre_fallback",
          "value": ""
        }, {
          "id": 272698,
          "key": "pyre_fallback_id",
          "value": ""
        }, {
          "id": 272699,
          "key": "pyre_demo_slider",
          "value": ""
        }, {
          "id": 272700,
          "key": "pyre_page_bg_layout",
          "value": "default"
        }, {
          "id": 272701,
          "key": "pyre_page_bg_color",
          "value": ""
        }, {
          "id": 272702,
          "key": "pyre_page_bg",
          "value": ""
        }, {
          "id": 272703,
          "key": "pyre_page_bg_id",
          "value": ""
        }, {
          "id": 272704,
          "key": "pyre_page_bg_full",
          "value": "no"
        }, {
          "id": 272705,
          "key": "pyre_page_bg_repeat",
          "value": "default"
        }, {
          "id": 272706,
          "key": "pyre_wide_page_bg_color",
          "value": ""
        }, {
          "id": 272707,
          "key": "pyre_wide_page_bg",
          "value": ""
        }, {
          "id": 272708,
          "key": "pyre_wide_page_bg_id",
          "value": ""
        }, {
          "id": 272709,
          "key": "pyre_wide_page_bg_full",
          "value": "no"
        }, {
          "id": 272710,
          "key": "pyre_wide_page_bg_repeat",
          "value": "default"
        }, {
          "id": 272711,
          "key": "pyre_page_title",
          "value": "default"
        }, {
          "id": 272712,
          "key": "pyre_page_title_breadcrumbs_search_bar",
          "value": "default"
        }, {
          "id": 272713,
          "key": "pyre_page_title_text",
          "value": "default"
        }, {
          "id": 272714,
          "key": "pyre_page_title_text_alignment",
          "value": "default"
        }, {
          "id": 272715,
          "key": "pyre_page_title_custom_text",
          "value": ""
        }, {
          "id": 272716,
          "key": "pyre_page_title_text_size",
          "value": ""
        }, {
          "id": 272717,
          "key": "pyre_page_title_font_color",
          "value": ""
        }, {
          "id": 272718,
          "key": "pyre_page_title_line_height",
          "value": ""
        }, {
          "id": 272719,
          "key": "pyre_page_title_custom_subheader",
          "value": ""
        }, {
          "id": 272720,
          "key": "pyre_page_title_custom_subheader_text_size",
          "value": ""
        }, {
          "id": 272721,
          "key": "pyre_page_title_subheader_font_color",
          "value": ""
        }, {
          "id": 272722,
          "key": "pyre_page_title_100_width",
          "value": "default"
        }, {
          "id": 272723,
          "key": "pyre_page_title_height",
          "value": ""
        }, {
          "id": 272724,
          "key": "pyre_page_title_mobile_height",
          "value": ""
        }, {
          "id": 272725,
          "key": "pyre_page_title_bar_bg_color",
          "value": ""
        }, {
          "id": 272726,
          "key": "pyre_page_title_bar_borders_color",
          "value": ""
        }, {
          "id": 272727,
          "key": "pyre_page_title_bar_bg",
          "value": ""
        }, {
          "id": 272728,
          "key": "pyre_page_title_bar_bg_id",
          "value": ""
        }, {
          "id": 272729,
          "key": "pyre_page_title_bar_bg_retina",
          "value": ""
        }, {
          "id": 272730,
          "key": "pyre_page_title_bar_bg_retina_id",
          "value": ""
        }, {
          "id": 272731,
          "key": "pyre_page_title_bar_bg_full",
          "value": "default"
        }, {
          "id": 272732,
          "key": "pyre_page_title_bg_parallax",
          "value": "default"
        }, {
          "id": 422697,
          "key": "sbg_selected_sidebar",
          "value": ["0"]
        }, {
          "id": 422698,
          "key": "sbg_selected_sidebar_replacement",
          "value": ["default_sidebar"]
        }, {
          "id": 422699,
          "key": "sbg_selected_sidebar_2",
          "value": ["0"]
        }, {
          "id": 422700,
          "key": "sbg_selected_sidebar_2_replacement",
          "value": ["default_sidebar"]
        }],
        "_links": {
          "self": [{
            "href": "https:\/\/alnoorgrocers.com\/wp-json\/wc\/v2\/products\/15830"
          }],
          "collection": [{
            "href": "https:\/\/alnoorgrocers.com\/wp-json\/wc\/v2\/products"
          }]
        }
      }, {
        "id": 15829,
        "name": "STILLMANS GREEN",
        "slug": "stillmans-green",
        "permalink": "https:\/\/alnoorgrocers.com\/product\/stillmans-green\/",
        "date_created": "2019-12-05T19:39:38",
        "date_created_gmt": "2019-12-05T19:39:38",
        "date_modified": "2019-12-27T07:22:43",
        "date_modified_gmt": "2019-12-27T07:22:43",
        "type": "simple",
        "status": "publish",
        "featured": false,
        "catalog_visibility": "visible",
        "description": "",
        "short_description": "",
        "sku": "",
        "price": "250.00",
        "regular_price": "250.00",
        "sale_price": "",
        "date_on_sale_from": null,
        "date_on_sale_from_gmt": null,
        "date_on_sale_to": null,
        "date_on_sale_to_gmt": null,
        "price_html": "<span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">&#8360;<\/span>250.00<\/span>",
        "on_sale": false,
        "purchasable": true,
        "total_sales": 0,
        "virtual": false,
        "downloadable": false,
        "downloads": [],
        "download_limit": -1,
        "download_expiry": -1,
        "external_url": "",
        "button_text": "",
        "tax_status": "taxable",
        "tax_class": "",
        "manage_stock": false,
        "stock_quantity": null,
        "in_stock": true,
        "backorders": "no",
        "backorders_allowed": false,
        "backordered": false,
        "sold_individually": false,
        "weight": "",
        "dimensions": {
          "length": "",
          "width": "",
          "height": ""
        },
        "shipping_required": true,
        "shipping_taxable": true,
        "shipping_class": "",
        "shipping_class_id": 0,
        "reviews_allowed": true,
        "average_rating": "0.00",
        "rating_count": 0,
        "related_ids": [13276, 13343, 13345, 13236, 13011],
        "upsell_ids": [],
        "cross_sell_ids": [],
        "parent_id": 0,
        "purchase_note": "",
        "categories": [{
          "id": 43,
          "name": "PERSONAL CARE",
          "slug": "beauty-cosmetics"
        }],
        "tags": [],
        "images": [{
          "id": 15912,
          "date_created": "2019-12-11T07:30:26",
          "date_created_gmt": "2019-12-11T07:30:26",
          "date_modified": "2019-12-11T07:30:26",
          "date_modified_gmt": "2019-12-11T07:30:26",
          "src": "https:\/\/alnoorgrocers.com\/wp-content\/uploads\/2019\/12\/STILLMANS-GREEN.jpg",
          "name": "STILLMANS GREEN",
          "alt": "",
          "position": 0
        }],
        "attributes": [],
        "default_attributes": [],
        "variations": [],
        "grouped_products": [],
        "menu_order": 0,
        "meta_data": [{
          "id": 267985,
          "key": "pyre_main_top_padding",
          "value": ""
        }, {
          "id": 267986,
          "key": "pyre_main_bottom_padding",
          "value": ""
        }, {
          "id": 267987,
          "key": "pyre_portfolio_width_100",
          "value": "default"
        }, {
          "id": 267988,
          "key": "pyre_hundredp_padding",
          "value": ""
        }, {
          "id": 267989,
          "key": "pyre_display_header",
          "value": "yes"
        }, {
          "id": 267990,
          "key": "pyre_header_100_width",
          "value": "default"
        }, {
          "id": 267991,
          "key": "pyre_combined_header_bg_color",
          "value": ""
        }, {
          "id": 267992,
          "key": "pyre_mobile_header_bg_color",
          "value": ""
        }, {
          "id": 267993,
          "key": "pyre_header_bg",
          "value": ""
        }, {
          "id": 267994,
          "key": "pyre_header_bg_id",
          "value": ""
        }, {
          "id": 267995,
          "key": "pyre_header_bg_full",
          "value": "no"
        }, {
          "id": 267996,
          "key": "pyre_header_bg_repeat",
          "value": "repeat"
        }, {
          "id": 267997,
          "key": "pyre_displayed_menu",
          "value": "default"
        }, {
          "id": 267998,
          "key": "pyre_display_footer",
          "value": "default"
        }, {
          "id": 267999,
          "key": "pyre_display_copyright",
          "value": "default"
        }, {
          "id": 268000,
          "key": "pyre_footer_100_width",
          "value": "default"
        }, {
          "id": 268001,
          "key": "pyre_sidebar_position",
          "value": "default"
        }, {
          "id": 268002,
          "key": "pyre_responsive_sidebar_order",
          "value": ""
        }, {
          "id": 268003,
          "key": "pyre_sidebar_sticky",
          "value": "default"
        }, {
          "id": 268004,
          "key": "pyre_sidebar_bg_color",
          "value": ""
        }, {
          "id": 268005,
          "key": "pyre_slider_type",
          "value": "no"
        }, {
          "id": 268006,
          "key": "pyre_wooslider",
          "value": "0"
        }, {
          "id": 268007,
          "key": "pyre_elasticslider",
          "value": "0"
        }, {
          "id": 268008,
          "key": "pyre_slider_position",
          "value": "default"
        }, {
          "id": 268009,
          "key": "pyre_avada_rev_styles",
          "value": "default"
        }, {
          "id": 268010,
          "key": "pyre_fallback",
          "value": ""
        }, {
          "id": 268011,
          "key": "pyre_fallback_id",
          "value": ""
        }, {
          "id": 268012,
          "key": "pyre_demo_slider",
          "value": ""
        }, {
          "id": 268013,
          "key": "pyre_page_bg_layout",
          "value": "default"
        }, {
          "id": 268014,
          "key": "pyre_page_bg_color",
          "value": ""
        }, {
          "id": 268015,
          "key": "pyre_page_bg",
          "value": ""
        }, {
          "id": 268016,
          "key": "pyre_page_bg_id",
          "value": ""
        }, {
          "id": 268017,
          "key": "pyre_page_bg_full",
          "value": "no"
        }, {
          "id": 268018,
          "key": "pyre_page_bg_repeat",
          "value": "default"
        }, {
          "id": 268019,
          "key": "pyre_wide_page_bg_color",
          "value": ""
        }, {
          "id": 268020,
          "key": "pyre_wide_page_bg",
          "value": ""
        }, {
          "id": 268021,
          "key": "pyre_wide_page_bg_id",
          "value": ""
        }, {
          "id": 268022,
          "key": "pyre_wide_page_bg_full",
          "value": "no"
        }, {
          "id": 268023,
          "key": "pyre_wide_page_bg_repeat",
          "value": "default"
        }, {
          "id": 268024,
          "key": "pyre_page_title",
          "value": "default"
        }, {
          "id": 268025,
          "key": "pyre_page_title_breadcrumbs_search_bar",
          "value": "default"
        }, {
          "id": 268026,
          "key": "pyre_page_title_text",
          "value": "default"
        }, {
          "id": 268027,
          "key": "pyre_page_title_text_alignment",
          "value": "default"
        }, {
          "id": 268028,
          "key": "pyre_page_title_custom_text",
          "value": ""
        }, {
          "id": 268029,
          "key": "pyre_page_title_text_size",
          "value": ""
        }, {
          "id": 268030,
          "key": "pyre_page_title_font_color",
          "value": ""
        }, {
          "id": 268031,
          "key": "pyre_page_title_line_height",
          "value": ""
        }, {
          "id": 268032,
          "key": "pyre_page_title_custom_subheader",
          "value": ""
        }, {
          "id": 268033,
          "key": "pyre_page_title_custom_subheader_text_size",
          "value": ""
        }, {
          "id": 268034,
          "key": "pyre_page_title_subheader_font_color",
          "value": ""
        }, {
          "id": 268035,
          "key": "pyre_page_title_100_width",
          "value": "default"
        }, {
          "id": 268036,
          "key": "pyre_page_title_height",
          "value": ""
        }, {
          "id": 268037,
          "key": "pyre_page_title_mobile_height",
          "value": ""
        }, {
          "id": 268038,
          "key": "pyre_page_title_bar_bg_color",
          "value": ""
        }, {
          "id": 268039,
          "key": "pyre_page_title_bar_borders_color",
          "value": ""
        }, {
          "id": 268040,
          "key": "pyre_page_title_bar_bg",
          "value": ""
        }, {
          "id": 268041,
          "key": "pyre_page_title_bar_bg_id",
          "value": ""
        }, {
          "id": 268042,
          "key": "pyre_page_title_bar_bg_retina",
          "value": ""
        }, {
          "id": 268043,
          "key": "pyre_page_title_bar_bg_retina_id",
          "value": ""
        }, {
          "id": 268044,
          "key": "pyre_page_title_bar_bg_full",
          "value": "default"
        }, {
          "id": 268045,
          "key": "pyre_page_title_bg_parallax",
          "value": "default"
        }, {
          "id": 422907,
          "key": "sbg_selected_sidebar",
          "value": ["0"]
        }, {
          "id": 422908,
          "key": "sbg_selected_sidebar_replacement",
          "value": ["default_sidebar"]
        }, {
          "id": 422909,
          "key": "sbg_selected_sidebar_2",
          "value": ["0"]
        }, {
          "id": 422910,
          "key": "sbg_selected_sidebar_2_replacement",
          "value": ["default_sidebar"]
        }],
        "_links": {
          "self": [{
            "href": "https:\/\/alnoorgrocers.com\/wp-json\/wc\/v2\/products\/15829"
          }],
          "collection": [{
            "href": "https:\/\/alnoorgrocers.com\/wp-json\/wc\/v2\/products"
          }]
        }
      }],
      interval: null,
      dataSource: [
        {
          title: '',
          caption: '',
          url: require('./assets/images/01.jpg'),
        }, {
          title: '',
          caption: '',
          url: require('./assets/images/02.jpg'),
        }, {
          title: '',
          caption: '',
          url: require('./assets/images/03.jpg'),
        },
         
      ],
      images: [
        'https://source.unsplash.com/1024x768/?nature',
        'https://source.unsplash.com/1024x768/?water',
        'https://source.unsplash.com/1024x768/?girl',
        'https://source.unsplash.com/1024x768/?tree'
      ],DATA : [
        {
          id: '15907',
          title: 'SOLUGHOL ISPGHOL 30g',
          image: 'https:\/\/alnoorgrocers.com\/wp-content\/uploads\/2019\/12\/SOLUGHOL-ISPGHOL-30g.jpg',
        },
        {
          id: '15908',
          title: 'areej ghee',
          image: 'https:\/\/alnoorgrocers.com\/wp-content\/uploads\/2019\/12\/areej-ghee.png',
        },
        {
          id: '15910',
          title: 'AREEJ CANOLA OIL',
          image: 'https:\/\/alnoorgrocers.com\/wp-content\/uploads\/2019\/12\/areej-Canola-oil-1.png',
        },
        {
          id: '15911',
          title: 'AREEJ COOKING OIL 1.8 LTR',
          image: 'https:\/\/alnoorgrocers.com\/wp-content\/uploads\/2019\/12\/AREEJ-COOKING-OIL-1.8-LTR.jpg',
        },
      ],
      
    };


  }


 

getslider(){

  return(<SliderBox
            
    images={this.state.images}
    sliderBoxHeight={200}
    onCurrentImagePressed={index =>
        console.warn(`image ${index} pressed`)
    }
/>)
};






componentWillUnmount() {
  clearInterval(this.state.interval);
}


componentWillMount() {
  this.setState({


    interval: setInterval(() => {
      this.setState({
        position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
      });
    }, 4000)

   


  });
}


renderItem = ({item}) => (
  <TouchableOpacity 
  style={{height:180, margin : 7 , backgroundColor: 'transparent', borderStyle:"solid"}}
    onPress={() => this.props.navigation.navigate("Product", { product: item })}
  >
    <View style={{flex : 2 }}>
      <Image style={{flex:1, width:null, height:null, resizeMode:'cover' }} source={{ uri: item.images[0].src }} />
    </View>
    <View style={{flex : 1, paddingLeft:5, paddingTop:5 }}>
    <Text>{item.name}</Text>
                </View>

  </TouchableOpacity>
)

  render() {

    const { DATA } = this.state;

    return (
     
      // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      //   <Text>DashboardScreen</Text>
      // </View>
      <ScrollView>

      

      <Slideshow 
        //scrollEnabled = {false}
        dataSource={this.state.dataSource}
        position={this.state.position}
        onPositionChanged={position => this.setState({ position })} 
        onPress={index =>
          console.log(index.image.title)
          //console.warn(`image ${index} pressed`)
      }/>


      <View style={{marginTop:5}}>
      <View ><Text style={{ textAlign: 'center',}}>Latest Products</Text></View>
      <Button color="#05a5d1" title="View More" onPress={() => this.props.navigation.navigate("Products")} />
      </View>


      

      <View style={{height : 200, marginTop:5}}>

      
      
      <ScrollView
      
      horizontal
      showsHorizontalScrollIndicator ={false}
      >
      {
        this.state.products.length ?
        <FlatList
          //contentContainerStyle={prostyles.list} 
          numColumns={10}
          data={this.state.products}
          keyExtractor={ item => item.id.toString() }
          renderItem={this.renderItem}
        />
        :
        <View style={prostyles.loaderContainer}>
          <Image
            source={ require('./assets/images/cart-loading.gif') }
            style={prostyles.loaderImage}
          />
        </View>
      }
    </ScrollView>

    </View>

   


    <SafeAreaView>
    <FlatList
      data={DATA}
      renderItem={({ item }) => (
        <TouchableOpacity style={{height:120, marginTop : 2 , backgroundColor: '#F5FCFF',}}  
        onPress={() => this.props.navigation.navigate("Products")}
        >
        <View style={{flex : 2}}>
            <Image source={{ uri: `${item.image}`}} style={{flex:1, width:130, height:null, resizeMode:'cover'}} />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Text>{item.title}</Text>
          </View>
        </TouchableOpacity>
      )}
     
    />
  </SafeAreaView>




                
        </ScrollView>
    );
  }
}

// class Feed extends Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Feed</Text>
//       </View>
//     );
//   }
// }

class Settings extends Component {

  constructor(props) {
    super(props);
  
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>This is Settings Page </Text>
        <Button color="#05a5d1" title="Dashboard" onPress={() => this.props.navigation.navigate("Dashboard")} />
      </View>
    );
  }
}

class Profile extends Component {
  render() {

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>This is Profile Page</Text>
        <Button color="#05a5d1" title="Dashboard" onPress={() => this.props.navigation.navigate("Dashboard")} />
      </View>
    );
  }
}


// const DashboardTabNavigator = createBottomTabNavigator(
//   {
//     Feed,
//     Profile,
//     Settings
//   },
//   {
//     navigationOptions: ({ navigation }) => {
//       const { routeName } = navigation.state.routes[navigation.state.index];
//       return {
//         headerTitle: routeName
//       };
//     }
//   }
// );



const CartStackNavigator = createStackNavigator({

  Cart: {
    screen: Cart
  },
  Location: {
    screen: Location
  },
  Checkout: {
    screen: Checkout
  },

})
const DashboardStackNavigator = createStackNavigator(
  {
    Dashboard : DashboardScreen,
    Products: {
      screen : ProductList
    },
    Product: {
      screen : SingleProduct
    },
    // Cart: {
    //   screen: Cart
    // },
    // Checkout: {
    //   screen: Checkout
    // },
    
  },
  
  {
    defaultNavigationOptions: ({ navigation }) => {
     return{
      headerStyle: {                                                                                        
        //backgroundColor: '#298e82',  
        //height : 100                                                                         
      },
      headerTitleStyle : {
              alignSelf: 'center' ,
              textAlign: 'center',
              flex:1
      },
      headerTitle: (
      
      <TouchableOpacity onPress={() => navigation.navigate('Dashboard')} >
        <Image  
        style={{ width: 220, height: 50 }} source={require('./assets/images/al-noor.png')}/>
        
      </TouchableOpacity>
      
    ),
      headerLeft: (
        <Icon
          style={{ paddingLeft: 10 }}
          onPress={() => navigation.openDrawer()}
          name="md-menu"
          size={30}
        />
      ),
      headerRight: (
        <Icon
          style={{ paddingRight: 10 }}
          name={Platform.OS === 'ios' ? `ios-cart` : 'md-cart'}
          size={30}
          onPress={() => navigation.navigate('Cart')}
        />
      ),
      
      

    };
    }
  }
);

const AppDrawerNavigator = createDrawerNavigator({
  Dashboard: {
    screen: DashboardStackNavigator
  },
  
  Profile: {
    screen: Profile
  },
  Settings: {
    screen: Settings
  },
  Cart : CartStackNavigator 
});

const AppSwitchNavigator = createSwitchNavigator({
  //Welcome: { screen: WelcomeScreen },
  Dashboard: { screen: AppDrawerNavigator },
  
  
});


const AppContainer = createAppContainer(AppSwitchNavigator);


const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  container:{
    marginTop:50
  },  
  item: {
    width: screenWidth - 60,
    height: screenWidth - 60,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  sliderImage: {
    height: 180,
    width: 150
  },
  sliderImage2: {
    height: 120,
    width: 360
  }
});


const prostyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f6f6f6',
  },
  list: {
    flexDirection: 'row'
  },
  listItem: {
    width: '50%'
  },
  view: {
    padding: 10
  },
  image: {
    width: 150, 
    height: 150
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    padding: 5
  },
  loaderContainer: {
    alignItems: 'center', 
    justifyContent: 'center',
  },
  loaderImage: {
    width: 200,
    height: 200,
  },
});