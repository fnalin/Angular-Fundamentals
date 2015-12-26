using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.IO;
using System.Web.Http;

namespace DemoApp.Api.Controllers
{
    public class EventsController : ApiController
    {
        public JToken Get(string id = null)
        {
            var dados = JObject.Parse(File.ReadAllText(path + id + ".json"));
            return dados;
        }

        public void Post(string id, JObject eventData)
        {
            File.WriteAllText(path + id + ".json",eventData.ToString(Formatting.None));
        }

        private string path
        {
            get
            {
                var host = System.Web.Hosting.HostingEnvironment.MapPath("/");
                var _path = host + "../DemoApp.UI/app/data/event/";
                return _path;
            }
        }
    }
}
