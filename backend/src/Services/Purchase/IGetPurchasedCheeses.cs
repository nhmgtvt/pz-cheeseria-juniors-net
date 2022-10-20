using System.Collections.Generic;
using Pz.Cheeseria.Api.Models;

namespace Pz.Cheeseria.Api.Services.Purchase
{
    public interface IGetPurchasedCheeses
    {
        IEnumerable<PurchasedCheeseInfo> GetPurchasedCheese();
    }
}
