using System.Collections.Generic;
using Pz.Cheeseria.Api.Data;
using Pz.Cheeseria.Api.Models;

namespace Pz.Cheeseria.Api.Services.Purchase
{
    public class PurchasedCheesesService : IPurchaseCheeseService
    {
        public void AddPurchasedCheeses(PurchasedCheeseInfo[] cheeses)
        {
            PurchasedCheesesRepository.PurchasedCheeses.Clear();
            for (int i = 0; i < cheeses.Length; i++)
            {
                if (cheeses[i] != null)
                    PurchasedCheesesRepository.PurchasedCheeses.Add(cheeses[i]);
            }
        }

        //public void DeletePurchasedCheeses(int cheeseId)
        //{
        //    PurchasedCheesesRepository.PurchasedCheeses.RemoveAll(c => c.CheeseId == cheeseId);
        //}

        //public void UpdatePurchasedCheeses(PurchasedCheeseInfo[] info)
        //{
        //    for (int i = 0; i < info.Length; i++)
        //    {
        //        var oldPurchasedCheese = PurchasedCheesesRepository.PurchasedCheeses.Find(c => c.CheeseId == info[i].CheeseId);
        //        if (oldPurchasedCheese != null)
        //        {
        //            oldPurchasedCheese.Quantity = info[i].Quantity;
        //        }
        //    }
        //}

        IEnumerable<PurchasedCheeseInfo> IGetPurchasedCheeses.GetPurchasedCheese()
        {
            return PurchasedCheesesRepository.PurchasedCheeses;
        }
    }
}
