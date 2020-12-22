import org.pgsqlite.SQLitePluginPackage;
  public class MainApplication extends Application implements ReactApplication {

 @Override
 protected List<ReactPackage> getPackages() {
   return Arrays.<ReactPackage>asList(
     new SQLitePluginPackage(),
     new MainReactPackage()
   );
 }
}