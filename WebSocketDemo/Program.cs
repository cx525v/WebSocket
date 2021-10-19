using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebSocketDemo
{
    class Program
    {
        static void Main(string[] args)
        {
            MRMSocket socket = new MRMSocket();
            socket.StartListening();
        }
    }
}
