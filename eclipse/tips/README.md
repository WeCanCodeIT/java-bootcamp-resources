# Eclipse Tips

## Modifying files outside of Eclipse

Eclipse caches information about the files in your file system to optimize its performance. This means that whenever you change the files in a project outside of Eclipse, you just refresh the project in Eclipse. Examples of changing files outside of Eclipse include (re)generating Eclipse configuration files via `gradle eclipse` or editing HTML/CSS/js files using an editor other than Eclipse.

To do this, either
	
- Right click on your project name (top level folder) inside Eclipse's *__Project Explorer__* view, then select *__Refresh__*.

	*- OR -*

- Select (click on) your project name inside Eclipse's *__Project Explorer__* view, then hit *__&lt;F5&gt;__*.

This will refresh your project, and you should see changes in configuration/edited files.