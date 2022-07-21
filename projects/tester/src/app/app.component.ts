import { Component, OnInit } from '@angular/core';
import { NgmDataSource } from 'ngm-tree-grid';
import { INgmExpansion, INgmTreeGridConfig } from 'ngm-tree-grid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'tester';
  data = [
    {
      "nodes": [
        {
          "nodes": [
            {
              "nodes": null,
              "id": 25738,
              "title": {
                "caption": "انواع استخدام"
              },
              "moduleTitle": {
                "caption": "سازمان"
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "انواع استخدام"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25739,
              "title": {
                "caption": "گروه شغلی"
              },
              "moduleTitle": {
                "caption": "سازمان"
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "گروه شغلی"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25740,
              "title": {
                "caption": "مشاغل و مشخصات مربوطه"
              },
              "moduleTitle": {
                "caption": "سازمان"
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "مشاغل و مشخصات مربوطه"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25741,
              "title": {
                "caption": "مقاطع تحصیلی"
              },
              "moduleTitle": {
                "caption": "سازمان"
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "مقاطع تحصیلی"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25742,
              "title": {
                "caption": "رشته/تخصص تحصیلی"
              },
              "moduleTitle": {
                "caption": "سازمان"
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "رشته/تخصص تحصیلی"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25743,
              "title": {
                "caption": "ماهیت محل"
              },
              "moduleTitle": {
                "caption": "سازمان"
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "ماهیت محل"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25744,
              "title": {
                "caption": "واحدهای اندازه گیری"
              },
              "moduleTitle": {
                "caption": "سازمان"
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "واحدهای اندازه گیری"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25745,
              "title": {
                "caption": "سایز"
              },
              "moduleTitle": {
                "caption": "سازمان"
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "سایز"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25746,
              "title": {
                "caption": "شیفت کاری"
              },
              "moduleTitle": {
                "caption": "سازمان"
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "شیفت کاری"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25747,
              "title": {
                "caption": "زمینه فعالیت"
              },
              "moduleTitle": {
                "caption": "سازمان"
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "زمینه فعالیت"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25748,
              "title": {
                "caption": "استان"
              },
              "moduleTitle": {
                "caption": "سازمان"
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "استان"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25749,
              "title": {
                "caption": "شهر"
              },
              "moduleTitle": {
                "caption": "سازمان"
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "شهر"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25841,
              "title": {
                "caption": "عوامل زیان آور شغل"
              },
              "moduleTitle": {
                "caption": "سازمان"
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "مشاغل و مشخصات مربوطه"
              },
              "subMenuTitle": null,
              "tabFormTitle": {
                "caption": "عوامل زیان آور شغل"
              },
              "itemType": 5
            },
            {
              "nodes": null,
              "id": 25842,
              "title": {
                "caption": "ریسک های شغل"
              },
              "moduleTitle": {
                "caption": "سازمان"
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "مشاغل و مشخصات مربوطه"
              },
              "subMenuTitle": null,
              "tabFormTitle": {
                "caption": "ریسک های شغل"
              },
              "itemType": 5
            },
            {
              "nodes": null,
              "id": 25843,
              "title": {
                "caption": "آموزش های مورد نیاز شغل"
              },
              "moduleTitle": {
                "caption": "سازمان"
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "مشاغل و مشخصات مربوطه"
              },
              "subMenuTitle": null,
              "tabFormTitle": {
                "caption": "آموزش های مورد نیاز شغل"
              },
              "itemType": 5
            },
            {
              "nodes": null,
              "id": 25844,
              "title": {
                "caption": "معاینات مورد نیاز شغل"
              },
              "moduleTitle": {
                "caption": "سازمان"
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "مشاغل و مشخصات مربوطه"
              },
              "subMenuTitle": null,
              "tabFormTitle": {
                "caption": "معاینات مورد نیاز شغل"
              },
              "itemType": 5
            },
            {
              "nodes": null,
              "id": 25845,
              "title": {
                "caption": "آزمایشات مورد نیاز شغل"
              },
              "moduleTitle": {
                "caption": "سازمان"
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "مشاغل و مشخصات مربوطه"
              },
              "subMenuTitle": null,
              "tabFormTitle": {
                "caption": "آزمایشات مورد نیاز شغل"
              },
              "itemType": 5
            },
            {
              "nodes": null,
              "id": 25846,
              "title": {
                "caption": "لوازم حفاظتی مورد نیاز شغل"
              },
              "moduleTitle": {
                "caption": "سازمان"
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "مشاغل و مشخصات مربوطه"
              },
              "subMenuTitle": null,
              "tabFormTitle": {
                "caption": "لوازم حفاظتی مورد نیاز شغل"
              },
              "itemType": 5
            },
            {
              "nodes": null,
              "id": 25847,
              "title": {
                "caption": "شرح وظایف"
              },
              "moduleTitle": {
                "caption": "سازمان"
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "مشاغل و مشخصات مربوطه"
              },
              "subMenuTitle": null,
              "tabFormTitle": {
                "caption": "شرح وظایف"
              },
              "itemType": 5
            },
            {
              "nodes": null,
              "id": 25848,
              "title": {
                "caption": "شرایط احراز"
              },
              "moduleTitle": {
                "caption": "سازمان"
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "مشاغل و مشخصات مربوطه"
              },
              "subMenuTitle": null,
              "tabFormTitle": {
                "caption": "شرایط احراز"
              },
              "itemType": 5
            }
          ],
          "id": 10726,
          "title": {
            "caption": "اطلاعات پایه"
          },
          "moduleTitle": {
            "caption": "سازمان"
          },
          "menuTitle": {
            "caption": "اطلاعات پایه"
          },
          "formTitle": null,
          "subMenuTitle": null,
          "tabFormTitle": null,
          "itemType": 2
        },
        {
          "nodes": [
            {
              "nodes": null,
              "id": 25750,
              "title": {
                "caption": "اطلاعات سازمان/شرکت"
              },
              "moduleTitle": {
                "caption": "سازمان"
              },
              "menuTitle": {
                "caption": "اطلاعات سازمان/شرکت"
              },
              "formTitle": {
                "caption": "اطلاعات سازمان/شرکت"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25751,
              "title": {
                "caption": "محل ها و مشخصات مربوطه"
              },
              "moduleTitle": {
                "caption": "سازمان"
              },
              "menuTitle": {
                "caption": "اطلاعات سازمان/شرکت"
              },
              "formTitle": {
                "caption": "محل ها و مشخصات مربوطه"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25752,
              "title": {
                "caption": "دپارتمان"
              },
              "moduleTitle": {
                "caption": "سازمان"
              },
              "menuTitle": {
                "caption": "اطلاعات سازمان/شرکت"
              },
              "formTitle": {
                "caption": "دپارتمان"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25753,
              "title": {
                "caption": "سمت/پست سازمانی"
              },
              "moduleTitle": {
                "caption": "سازمان"
              },
              "menuTitle": {
                "caption": "اطلاعات سازمان/شرکت"
              },
              "formTitle": {
                "caption": "سمت/پست سازمانی"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25849,
              "title": {
                "caption": "مستندات "
              },
              "moduleTitle": {
                "caption": "سازمان"
              },
              "menuTitle": {
                "caption": "اطلاعات سازمان/شرکت"
              },
              "formTitle": {
                "caption": "اطلاعات سازمان/شرکت"
              },
              "subMenuTitle": null,
              "tabFormTitle": {
                "caption": "مستندات "
              },
              "itemType": 5
            },
            {
              "nodes": null,
              "id": 25850,
              "title": {
                "caption": "عوامل زیان آور محل"
              },
              "moduleTitle": {
                "caption": "سازمان"
              },
              "menuTitle": {
                "caption": "اطلاعات سازمان/شرکت"
              },
              "formTitle": {
                "caption": "محل ها و مشخصات مربوطه"
              },
              "subMenuTitle": null,
              "tabFormTitle": {
                "caption": "عوامل زیان آور محل"
              },
              "itemType": 5
            },
            {
              "nodes": null,
              "id": 25851,
              "title": {
                "caption": "ریسک های محل"
              },
              "moduleTitle": {
                "caption": "سازمان"
              },
              "menuTitle": {
                "caption": "اطلاعات سازمان/شرکت"
              },
              "formTitle": {
                "caption": "محل ها و مشخصات مربوطه"
              },
              "subMenuTitle": null,
              "tabFormTitle": {
                "caption": "ریسک های محل"
              },
              "itemType": 5
            },
            {
              "nodes": null,
              "id": 25852,
              "title": {
                "caption": "آموزش های مورد نیاز محل"
              },
              "moduleTitle": {
                "caption": "سازمان"
              },
              "menuTitle": {
                "caption": "اطلاعات سازمان/شرکت"
              },
              "formTitle": {
                "caption": "محل ها و مشخصات مربوطه"
              },
              "subMenuTitle": null,
              "tabFormTitle": {
                "caption": "آموزش های مورد نیاز محل"
              },
              "itemType": 5
            },
            {
              "nodes": null,
              "id": 25853,
              "title": {
                "caption": "معاینات مورد نیاز محل"
              },
              "moduleTitle": {
                "caption": "سازمان"
              },
              "menuTitle": {
                "caption": "اطلاعات سازمان/شرکت"
              },
              "formTitle": {
                "caption": "محل ها و مشخصات مربوطه"
              },
              "subMenuTitle": null,
              "tabFormTitle": {
                "caption": "معاینات مورد نیاز محل"
              },
              "itemType": 5
            },
            {
              "nodes": null,
              "id": 25854,
              "title": {
                "caption": "آزمایشات مورد نیاز محل"
              },
              "moduleTitle": {
                "caption": "سازمان"
              },
              "menuTitle": {
                "caption": "اطلاعات سازمان/شرکت"
              },
              "formTitle": {
                "caption": "محل ها و مشخصات مربوطه"
              },
              "subMenuTitle": null,
              "tabFormTitle": {
                "caption": "آزمایشات مورد نیاز محل"
              },
              "itemType": 5
            },
            {
              "nodes": null,
              "id": 25855,
              "title": {
                "caption": "لوازم حفاظتی مورد نیاز محل"
              },
              "moduleTitle": {
                "caption": "سازمان"
              },
              "menuTitle": {
                "caption": "اطلاعات سازمان/شرکت"
              },
              "formTitle": {
                "caption": "محل ها و مشخصات مربوطه"
              },
              "subMenuTitle": null,
              "tabFormTitle": {
                "caption": "لوازم حفاظتی مورد نیاز محل"
              },
              "itemType": 5
            }
          ],
          "id": 10727,
          "title": {
            "caption": "اطلاعات سازمان/شرکت"
          },
          "moduleTitle": {
            "caption": "سازمان"
          },
          "menuTitle": {
            "caption": "اطلاعات سازمان/شرکت"
          },
          "formTitle": null,
          "subMenuTitle": null,
          "tabFormTitle": null,
          "itemType": 2
        },
        {
          "nodes": [
            {
              "nodes": null,
              "id": 25754,
              "title": {
                "caption": "مشخصات پرسنل"
              },
              "moduleTitle": {
                "caption": "سازمان"
              },
              "menuTitle": {
                "caption": "مشخصات پرسنل"
              },
              "formTitle": {
                "caption": "مشخصات پرسنل"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25856,
              "title": {
                "caption": "اطلاعات شغل پرسنل"
              },
              "moduleTitle": {
                "caption": "سازمان"
              },
              "menuTitle": {
                "caption": "مشخصات پرسنل"
              },
              "formTitle": {
                "caption": "مشخصات پرسنل"
              },
              "subMenuTitle": null,
              "tabFormTitle": {
                "caption": "اطلاعات شغل پرسنل"
              },
              "itemType": 5
            },
            {
              "nodes": null,
              "id": 25857,
              "title": {
                "caption": "اطلاعات تکمیلی پرسنل"
              },
              "moduleTitle": {
                "caption": "سازمان"
              },
              "menuTitle": {
                "caption": "مشخصات پرسنل"
              },
              "formTitle": {
                "caption": "مشخصات پرسنل"
              },
              "subMenuTitle": null,
              "tabFormTitle": {
                "caption": "اطلاعات تکمیلی پرسنل"
              },
              "itemType": 5
            }
          ],
          "id": 10728,
          "title": {
            "caption": "مشخصات پرسنل"
          },
          "moduleTitle": {
            "caption": "سازمان"
          },
          "menuTitle": {
            "caption": "مشخصات پرسنل"
          },
          "formTitle": null,
          "subMenuTitle": null,
          "tabFormTitle": null,
          "itemType": 2
        }
      ],
      "id": 5340,
      "title": {
        "caption": "سازمان"
      },
      "moduleTitle": {
        "caption": "سازمان"
      },
      "menuTitle": null,
      "formTitle": null,
      "subMenuTitle": null,
      "tabFormTitle": null,
      "itemType": 1
    },
    {
      "nodes": [
        {
          "nodes": [
            {
              "nodes": null,
              "id": 25736,
              "title": {
                "caption": "پیمانکاران حقوقی"
              },
              "moduleTitle": {
                "caption": "پیمانکاران"
              },
              "menuTitle": {
                "caption": "پیمانکاران"
              },
              "formTitle": {
                "caption": "پیمانکاران حقوقی"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25737,
              "title": {
                "caption": "پیمانکاران حقیقی"
              },
              "moduleTitle": {
                "caption": "پیمانکاران"
              },
              "menuTitle": {
                "caption": "پیمانکاران"
              },
              "formTitle": {
                "caption": "پیمانکاران حقیقی"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25833,
              "title": {
                "caption": "قراردادهای پیمانکاران"
              },
              "moduleTitle": {
                "caption": "پیمانکاران"
              },
              "menuTitle": {
                "caption": "پیمانکاران"
              },
              "formTitle": {
                "caption": "پیمانکاران حقوقی"
              },
              "subMenuTitle": null,
              "tabFormTitle": {
                "caption": "قراردادهای پیمانکاران"
              },
              "itemType": 5
            },
            {
              "nodes": null,
              "id": 25834,
              "title": {
                "caption": "گواهینامه ها و رتبه های پیمانکاران"
              },
              "moduleTitle": {
                "caption": "پیمانکاران"
              },
              "menuTitle": {
                "caption": "پیمانکاران"
              },
              "formTitle": {
                "caption": "پیمانکاران حقوقی"
              },
              "subMenuTitle": null,
              "tabFormTitle": {
                "caption": "گواهینامه ها و رتبه های پیمانکاران"
              },
              "itemType": 5
            },
            {
              "nodes": null,
              "id": 25835,
              "title": {
                "caption": "پرسنل پیمانکار"
              },
              "moduleTitle": {
                "caption": "پیمانکاران"
              },
              "menuTitle": {
                "caption": "پیمانکاران"
              },
              "formTitle": {
                "caption": "پیمانکاران حقوقی"
              },
              "subMenuTitle": null,
              "tabFormTitle": {
                "caption": "پرسنل پیمانکار"
              },
              "itemType": 5
            },
            {
              "nodes": null,
              "id": 25836,
              "title": {
                "caption": "ماشین آلات پیمانکار"
              },
              "moduleTitle": {
                "caption": "پیمانکاران"
              },
              "menuTitle": {
                "caption": "پیمانکاران"
              },
              "formTitle": {
                "caption": "پیمانکاران حقوقی"
              },
              "subMenuTitle": null,
              "tabFormTitle": {
                "caption": "ماشین آلات پیمانکار"
              },
              "itemType": 5
            },
            {
              "nodes": null,
              "id": 25837,
              "title": {
                "caption": "اطلاعات تکمیلی پیمانکار"
              },
              "moduleTitle": {
                "caption": "پیمانکاران"
              },
              "menuTitle": {
                "caption": "پیمانکاران"
              },
              "formTitle": {
                "caption": "پیمانکاران حقوقی"
              },
              "subMenuTitle": null,
              "tabFormTitle": {
                "caption": "اطلاعات تکمیلی پیمانکار"
              },
              "itemType": 5
            },
            {
              "nodes": null,
              "id": 25838,
              "title": {
                "caption": "قراردادهای پیمانکار"
              },
              "moduleTitle": {
                "caption": "پیمانکاران"
              },
              "menuTitle": {
                "caption": "پیمانکاران"
              },
              "formTitle": {
                "caption": "پیمانکاران حقیقی"
              },
              "subMenuTitle": null,
              "tabFormTitle": {
                "caption": "قراردادهای پیمانکار"
              },
              "itemType": 5
            },
            {
              "nodes": null,
              "id": 25839,
              "title": {
                "caption": "گواهینامه ها و رتبه های پیمانکار"
              },
              "moduleTitle": {
                "caption": "پیمانکاران"
              },
              "menuTitle": {
                "caption": "پیمانکاران"
              },
              "formTitle": {
                "caption": "پیمانکاران حقیقی"
              },
              "subMenuTitle": null,
              "tabFormTitle": {
                "caption": "گواهینامه ها و رتبه های پیمانکار"
              },
              "itemType": 5
            },
            {
              "nodes": null,
              "id": 25840,
              "title": {
                "caption": "اطلاعات تکمیلی پیمانکار"
              },
              "moduleTitle": {
                "caption": "پیمانکاران"
              },
              "menuTitle": {
                "caption": "پیمانکاران"
              },
              "formTitle": {
                "caption": "پیمانکاران حقیقی"
              },
              "subMenuTitle": null,
              "tabFormTitle": {
                "caption": "اطلاعات تکمیلی پیمانکار"
              },
              "itemType": 5
            }
          ],
          "id": 10725,
          "title": {
            "caption": "پیمانکاران"
          },
          "moduleTitle": {
            "caption": "پیمانکاران"
          },
          "menuTitle": {
            "caption": "پیمانکاران"
          },
          "formTitle": null,
          "subMenuTitle": null,
          "tabFormTitle": null,
          "itemType": 2
        }
      ],
      "id": 5339,
      "title": {
        "caption": "پیمانکاران"
      },
      "moduleTitle": {
        "caption": "پیمانکاران"
      },
      "menuTitle": null,
      "formTitle": null,
      "subMenuTitle": null,
      "tabFormTitle": null,
      "itemType": 1
    },
    {
      "nodes": [
        {
          "nodes": [
            {
              "nodes": null,
              "id": 25778,
              "title": {
                "caption": "عنوان متعلقات"
              },
              "moduleTitle": {
                "caption": "ماشین الات و تجهیزات"
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "عنوان متعلقات"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25779,
              "title": {
                "caption": "گروه بندی"
              },
              "moduleTitle": {
                "caption": "ماشین الات و تجهیزات"
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "گروه بندی"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25780,
              "title": {
                "caption": "کاربری"
              },
              "moduleTitle": {
                "caption": "ماشین الات و تجهیزات"
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "کاربری"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25781,
              "title": {
                "caption": "مواد شارژ"
              },
              "moduleTitle": {
                "caption": "ماشین الات و تجهیزات"
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "مواد شارژ"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25782,
              "title": {
                "caption": "نوع تجهیزات"
              },
              "moduleTitle": {
                "caption": "ماشین الات و تجهیزات"
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "نوع تجهیزات"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25783,
              "title": {
                "caption": "نوع خودرو و ماشین آلات"
              },
              "moduleTitle": {
                "caption": "ماشین الات و تجهیزات"
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "نوع خودرو و ماشین آلات"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            }
          ],
          "id": 10738,
          "title": {
            "caption": "اطلاعات پایه"
          },
          "moduleTitle": {
            "caption": "ماشین الات و تجهیزات"
          },
          "menuTitle": {
            "caption": "اطلاعات پایه"
          },
          "formTitle": null,
          "subMenuTitle": null,
          "tabFormTitle": null,
          "itemType": 2
        },
        {
          "nodes": [
            {
              "nodes": null,
              "id": 25784,
              "title": {
                "caption": "خودرو و ماشین آلات"
              },
              "moduleTitle": {
                "caption": "ماشین الات و تجهیزات"
              },
              "menuTitle": {
                "caption": "ماشین آلات و تجهیزات"
              },
              "formTitle": {
                "caption": "خودرو و ماشین آلات"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25785,
              "title": {
                "caption": "رانندگان"
              },
              "moduleTitle": {
                "caption": "ماشین الات و تجهیزات"
              },
              "menuTitle": {
                "caption": "ماشین آلات و تجهیزات"
              },
              "formTitle": {
                "caption": "رانندگان"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25786,
              "title": {
                "caption": "تجهیزات"
              },
              "moduleTitle": {
                "caption": "ماشین الات و تجهیزات"
              },
              "menuTitle": {
                "caption": "ماشین آلات و تجهیزات"
              },
              "formTitle": {
                "caption": "تجهیزات"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25787,
              "title": {
                "caption": "شارژ تجهیزات"
              },
              "moduleTitle": {
                "caption": "ماشین الات و تجهیزات"
              },
              "menuTitle": {
                "caption": "ماشین آلات و تجهیزات"
              },
              "formTitle": {
                "caption": "شارژ تجهیزات"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25788,
              "title": {
                "caption": "وضعیت خودرو،تجهیزات"
              },
              "moduleTitle": {
                "caption": "ماشین الات و تجهیزات"
              },
              "menuTitle": {
                "caption": "ماشین آلات و تجهیزات"
              },
              "formTitle": {
                "caption": "وضعیت خودرو،تجهیزات"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25789,
              "title": {
                "caption": "تحویل و انتقال"
              },
              "moduleTitle": {
                "caption": "ماشین الات و تجهیزات"
              },
              "menuTitle": {
                "caption": "ماشین آلات و تجهیزات"
              },
              "formTitle": {
                "caption": "تحویل و انتقال"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25790,
              "title": {
                "caption": "گواهینامه ها"
              },
              "moduleTitle": {
                "caption": "ماشین الات و تجهیزات"
              },
              "menuTitle": {
                "caption": "ماشین آلات و تجهیزات"
              },
              "formTitle": {
                "caption": "گواهینامه ها"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25869,
              "title": {
                "caption": "اطلاعات بیمه"
              },
              "moduleTitle": {
                "caption": "ماشین الات و تجهیزات"
              },
              "menuTitle": {
                "caption": "ماشین آلات و تجهیزات"
              },
              "formTitle": {
                "caption": "خودرو و ماشین آلات"
              },
              "subMenuTitle": null,
              "tabFormTitle": {
                "caption": "اطلاعات بیمه"
              },
              "itemType": 5
            },
            {
              "nodes": null,
              "id": 25870,
              "title": {
                "caption": "رانندگان"
              },
              "moduleTitle": {
                "caption": "ماشین الات و تجهیزات"
              },
              "menuTitle": {
                "caption": "ماشین آلات و تجهیزات"
              },
              "formTitle": {
                "caption": "خودرو و ماشین آلات"
              },
              "subMenuTitle": null,
              "tabFormTitle": {
                "caption": "رانندگان"
              },
              "itemType": 5
            },
            {
              "nodes": null,
              "id": 25871,
              "title": {
                "caption": "فایل ها"
              },
              "moduleTitle": {
                "caption": "ماشین الات و تجهیزات"
              },
              "menuTitle": {
                "caption": "ماشین آلات و تجهیزات"
              },
              "formTitle": {
                "caption": "خودرو و ماشین آلات"
              },
              "subMenuTitle": null,
              "tabFormTitle": {
                "caption": "فایل ها"
              },
              "itemType": 5
            },
            {
              "nodes": null,
              "id": 25872,
              "title": {
                "caption": "اطلاعات تکمیلی"
              },
              "moduleTitle": {
                "caption": "ماشین الات و تجهیزات"
              },
              "menuTitle": {
                "caption": "ماشین آلات و تجهیزات"
              },
              "formTitle": {
                "caption": "خودرو و ماشین آلات"
              },
              "subMenuTitle": null,
              "tabFormTitle": {
                "caption": "اطلاعات تکمیلی"
              },
              "itemType": 5
            },
            {
              "nodes": null,
              "id": 25873,
              "title": {
                "caption": "فایل ها"
              },
              "moduleTitle": {
                "caption": "ماشین الات و تجهیزات"
              },
              "menuTitle": {
                "caption": "ماشین آلات و تجهیزات"
              },
              "formTitle": {
                "caption": "تجهیزات"
              },
              "subMenuTitle": null,
              "tabFormTitle": {
                "caption": "فایل ها"
              },
              "itemType": 5
            }
          ],
          "id": 10739,
          "title": {
            "caption": "ماشین آلات و تجهیزات"
          },
          "moduleTitle": {
            "caption": "ماشین الات و تجهیزات"
          },
          "menuTitle": {
            "caption": "ماشین آلات و تجهیزات"
          },
          "formTitle": null,
          "subMenuTitle": null,
          "tabFormTitle": null,
          "itemType": 2
        },
        {
          "nodes": [],
          "id": 10740,
          "title": {
            "caption": "گزارشات"
          },
          "moduleTitle": {
            "caption": "ماشین الات و تجهیزات"
          },
          "menuTitle": {
            "caption": "گزارشات"
          },
          "formTitle": null,
          "subMenuTitle": null,
          "tabFormTitle": null,
          "itemType": 2
        }
      ],
      "id": 5345,
      "title": {
        "caption": "ماشین الات و تجهیزات"
      },
      "moduleTitle": {
        "caption": "ماشین الات و تجهیزات"
      },
      "menuTitle": null,
      "formTitle": null,
      "subMenuTitle": null,
      "tabFormTitle": null,
      "itemType": 1
    },
    {
      "nodes": [
        {
          "nodes": [
            {
              "nodes": null,
              "id": 25735,
              "title": {
                "caption": "گروه آلودگی"
              },
              "moduleTitle": {
                "caption": "سلامت"
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "گروه آلودگی"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            }
          ],
          "id": 10724,
          "title": {
            "caption": "اطلاعات پایه"
          },
          "moduleTitle": {
            "caption": "سلامت"
          },
          "menuTitle": {
            "caption": "اطلاعات پایه"
          },
          "formTitle": null,
          "subMenuTitle": null,
          "tabFormTitle": null,
          "itemType": 2
        }
      ],
      "id": 5338,
      "title": {
        "caption": "سلامت"
      },
      "moduleTitle": {
        "caption": "سلامت"
      },
      "menuTitle": null,
      "formTitle": null,
      "subMenuTitle": null,
      "tabFormTitle": null,
      "itemType": 1
    },
    {
      "nodes": [
        {
          "nodes": [],
          "id": 10741,
          "title": {
            "caption": "اطلاعات پایه"
          },
          "moduleTitle": {
            "caption": "آتش نشانی"
          },
          "menuTitle": {
            "caption": "اطلاعات پایه"
          },
          "formTitle": null,
          "subMenuTitle": null,
          "tabFormTitle": null,
          "itemType": 2
        },
        {
          "nodes": [
            {
              "nodes": null,
              "id": 25791,
              "title": {
                "caption": "تعریف شیفت"
              },
              "moduleTitle": {
                "caption": "آتش نشانی"
              },
              "menuTitle": {
                "caption": "گزارش شیفت"
              },
              "formTitle": {
                "caption": "تعریف شیفت"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25792,
              "title": {
                "caption": "تقویم آتش نشانی"
              },
              "moduleTitle": {
                "caption": "آتش نشانی"
              },
              "menuTitle": {
                "caption": "گزارش شیفت"
              },
              "formTitle": {
                "caption": "تقویم آتش نشانی"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25793,
              "title": {
                "caption": "گزارش روزانه"
              },
              "moduleTitle": {
                "caption": "آتش نشانی"
              },
              "menuTitle": {
                "caption": "گزارش شیفت"
              },
              "formTitle": {
                "caption": "گزارش روزانه"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            }
          ],
          "id": 10742,
          "title": {
            "caption": "گزارش شیفت"
          },
          "moduleTitle": {
            "caption": "آتش نشانی"
          },
          "menuTitle": {
            "caption": "گزارش شیفت"
          },
          "formTitle": null,
          "subMenuTitle": null,
          "tabFormTitle": null,
          "itemType": 2
        },
        {
          "nodes": [
            {
              "nodes": null,
              "id": 25794,
              "title": {
                "caption": "دوره آزمون آتش نشانی"
              },
              "moduleTitle": {
                "caption": "آتش نشانی"
              },
              "menuTitle": {
                "caption": "آزمون آتش نشانی"
              },
              "formTitle": {
                "caption": "دوره آزمون آتش نشانی"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25795,
              "title": {
                "caption": "لیست آزمون های آتش نشانی"
              },
              "moduleTitle": {
                "caption": "آتش نشانی"
              },
              "menuTitle": {
                "caption": "آزمون آتش نشانی"
              },
              "formTitle": {
                "caption": "لیست آزمون های آتش نشانی"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            }
          ],
          "id": 10743,
          "title": {
            "caption": "آزمون آتش نشانی"
          },
          "moduleTitle": {
            "caption": "آتش نشانی"
          },
          "menuTitle": {
            "caption": "آزمون آتش نشانی"
          },
          "formTitle": null,
          "subMenuTitle": null,
          "tabFormTitle": null,
          "itemType": 2
        },
        {
          "nodes": [],
          "id": 10744,
          "title": {
            "caption": "گزارشات"
          },
          "moduleTitle": {
            "caption": "آتش نشانی"
          },
          "menuTitle": {
            "caption": "گزارشات"
          },
          "formTitle": null,
          "subMenuTitle": null,
          "tabFormTitle": null,
          "itemType": 2
        },
        {
          "nodes": [
            {
              "nodes": null,
              "id": 25874,
              "title": {
                "caption": "فعالیت آتش نشانی"
              },
              "moduleTitle": {
                "caption": "آتش نشانی"
              },
              "menuTitle": {
                "caption": "گزارش روزانه آتش نشانی"
              },
              "formTitle": {
                "caption": "فعالیت آتش نشانی"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25875,
              "title": {
                "caption": "پارامترهای مورد سنجش"
              },
              "moduleTitle": {
                "caption": "آتش نشانی"
              },
              "menuTitle": {
                "caption": "گزارش روزانه آتش نشانی"
              },
              "formTitle": {
                "caption": "پارامترهای مورد سنجش"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            }
          ],
          "id": 10763,
          "title": {
            "caption": "گزارش روزانه آتش نشانی"
          },
          "moduleTitle": {
            "caption": "آتش نشانی"
          },
          "menuTitle": {
            "caption": "گزارش روزانه آتش نشانی"
          },
          "formTitle": null,
          "subMenuTitle": null,
          "tabFormTitle": null,
          "itemType": 3
        },
        {
          "nodes": [
            {
              "nodes": null,
              "id": 25876,
              "title": {
                "caption": "آیتم های آزمون"
              },
              "moduleTitle": {
                "caption": "آتش نشانی"
              },
              "menuTitle": {
                "caption": "آزمون آتش نشانی"
              },
              "formTitle": {
                "caption": "آیتم های آزمون"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25877,
              "title": {
                "caption": "تنظیم امتیاز آزمون آمادگی جسمانی"
              },
              "moduleTitle": {
                "caption": "آتش نشانی"
              },
              "menuTitle": {
                "caption": "آزمون آتش نشانی"
              },
              "formTitle": {
                "caption": "تنظیم امتیاز آزمون آمادگی جسمانی"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            }
          ],
          "id": 10764,
          "title": {
            "caption": "آزمون آتش نشانی"
          },
          "moduleTitle": {
            "caption": "آتش نشانی"
          },
          "menuTitle": {
            "caption": "آزمون آتش نشانی"
          },
          "formTitle": null,
          "subMenuTitle": null,
          "tabFormTitle": null,
          "itemType": 3
        }
      ],
      "id": 5346,
      "title": {
        "caption": "آتش نشانی"
      },
      "moduleTitle": {
        "caption": "آتش نشانی"
      },
      "menuTitle": null,
      "formTitle": null,
      "subMenuTitle": null,
      "tabFormTitle": null,
      "itemType": 1
    }
  ];
  dataSource = new NgmDataSource();
  getChildrenFn = (obj: any) => obj.nodes ?? []
  treeGridConfig: INgmTreeGridConfig = {
    columns: [
      {header: 'Title', width: 50},
      {header: 'Id', width: 10}
    ],
    searchFn: (item, text) => item.title.caption.includes(text)
  }



  ngOnInit() {
    this.dataSource.data = this.data;
    this.dataSource.getChildrenFn = (obj: any) => obj.nodes ?? []
  }

  onExpand(e: INgmExpansion) {
    // console.log('expand:   ', e)
  }

  onCollapse(e: INgmExpansion) {
    // console.log('collapse:   ', e)
  }
}
