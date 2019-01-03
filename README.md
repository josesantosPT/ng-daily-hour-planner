# ng-daily-hour-planner
Angular 6 Component that allows tagging the hours in a day by dragging labels into the corresponding time slots.

### Usage 
- Copy the **ng-daily-hour-planner** folder into your Angular project
- Import **NgDailyHourPlannerModule** into your module
- Add **&lt;app-ng-daily-hour-planner&gt;** directive to the html
- Setup the desired properties, or, if left unchanged, use the default ones

### Component Properties
You can define the following properties of the &lt;app-ng-daily-hour-planner&gt; directive:

- **startHour**: Number that specifies the starting hour for the component (0-24
- **endHour**: Number that specifies the ending hour for the component (0-24)
- **interval**: Number that specifies the amount of minutes that the table is split into.


### Component Models
You can provide the following models to the directive
- **data**: this property allows defining an array object that mirrors the current data displayed on the planner. Must be of the following format: Array of *{  time: number; tag: string; color: string; }*
- **tags**: An array that can be supplied to the component, containing the definition for the tags that can be dragged to the planner. Must be of the following format: Array of *{ name: string; color: string; }*

### Example 
![Demo Image](https://github.com/josesantosPT/ng-daily-hour-planner/raw/master/hour-planner-demo.PNG)
